import { Variants, Transition } from "framer-motion";

/**
 * AINCURU Motion System Design Tokens
 * Disciplined enterprise animation tokens based on editorial restraint.
 */

export const EASE_ENTER = [0.22, 1, 0.36, 1] as const;
export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.22,
  standard: 0.4,
  reveal: 0.7,
  hero: 1.0,
  largeTransition: 1.2,
} as const;

export const TRANSITION_ENTER: Transition = {
  duration: DURATION.reveal,
  ease: EASE_ENTER,
};

export const TRANSITION_FAST: Transition = {
  duration: DURATION.fast,
  ease: EASE_SMOOTH,
};

export const TRANSITION_STANDARD: Transition = {
  duration: DURATION.standard,
  ease: EASE_ENTER,
};

// Section Reveal Variants (fires once when in viewport)
export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.reveal,
      ease: EASE_ENTER,
    },
  },
};

// Staggered Container for Eyebrow -> Heading -> Paragraph -> Visual -> CTA
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_ENTER,
    },
  },
};

// Editorial Headline Reveal (Masked / Clip reveal from below)
export const headlineRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.75,
      ease: EASE_ENTER,
    },
  },
};

// Thin Origin-Left Divider
export const dividerExpandVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: EASE_ENTER,
    },
  },
};
