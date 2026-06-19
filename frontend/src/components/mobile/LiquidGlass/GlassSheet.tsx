import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { modalOverlay, sheetSlideUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface GlassSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  dismissible?: boolean;
  closeOnOverlay?: boolean;
  initialFocus?: React.RefObject<HTMLElement>;
  className?: string;
  overlayClassName?: string;
  children: React.ReactNode;
}

export function GlassSheet({
  open,
  onClose,
  title,
  description,
  dismissible = true,
  closeOnOverlay = true,
  initialFocus,
  className,
  overlayClassName,
  children,
}: GlassSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = (document.activeElement as HTMLElement) ?? null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dismissible) onClose();
    };
    document.addEventListener('keydown', handleKey);
    const t = setTimeout(() => {
      initialFocus?.current?.focus() ?? sheetRef.current?.focus();
    }, 80);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, dismissible, onClose, initialFocus]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeOnOverlay ? onClose : undefined}
            className={cn('fixed inset-0 z-mobile-overlay bg-black/60 backdrop-blur-glass-1', overlayClassName)}
            aria-hidden="true"
          />
          <motion.div
            key="sheet"
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label={title ?? 'Sheet'}
            aria-describedby={description ? 'sheet-desc' : undefined}
            tabIndex={-1}
            variants={sheetSlideUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag={dismissible ? 'y' : undefined}
            dragConstraints={{ top: 0, bottom: 80 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => {
              if (!dismissible) return;
              if (info.offset.y > 120 || info.velocity.y > 500) onClose();
            }}
            className={cn(
              'fixed bottom-0 left-0 right-0 z-mobile-sheet max-h-[92vh] overflow-hidden',
              'rounded-t-[28px] outline-none',
              'bg-[rgba(2,4,10,0.86)] backdrop-blur-glass-3 backdrop-saturate-glass-max',
              'border border-white/[0.14] border-b-0',
              'shadow-[0_-24px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(0,229,255,0.08)]',
              'pb-[max(env(safe-area-inset-bottom),16px)]',
              className,
            )}
          >
            {dismissible && (
              <div className="flex justify-center pt-3 pb-1" aria-hidden="true">
                <span className="h-1 w-12 rounded-full bg-white/30" />
              </div>
            )}
            {(title || description) && (
              <div className="px-6 pt-4 pb-3 border-b border-white/[0.06]">
                {title && <h2 className="text-lg font-bold text-white tracking-tight">{title}</h2>}
                {description && (
                  <p id="sheet-desc" className="text-sm text-white/60 mt-1">{description}</p>
                )}
              </div>
            )}
            <div className="overflow-y-auto max-h-[calc(92vh-80px)] px-mobile-base sm:px-mobile-xl pb-mobile-xl">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
