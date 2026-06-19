/**
 * Centralized Framer Motion variants library.
 *
 * Every animated component in the mobile overhaul imports from here.
 */

import type { Variants, Transition } from 'framer-motion';
import { easings as e } from './easings';

const withEase = (v: readonly number[]): Transition['ease'] => v as unknown as Transition['ease'];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: withEase(e.out) } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: withEase(e.out) } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: withEase(e.out) } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 32, mass: 0.9 } },
};

export const liquidFade: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(8px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: withEase(e.liquid) } },
};

export const pageEnter: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.18, ease: withEase(e.out) } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12, ease: withEase(e.inOut) } },
};

export const sheetSlideUp: Variants = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { type: 'spring', stiffness: 320, damping: 32, mass: 0.9 } },
  exit: { y: '100%', transition: { duration: 0.2, ease: withEase(e.inOut) } },
};

export const drawerRight: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 380, damping: 28, mass: 0.8 } },
  exit: { x: '100%', transition: { duration: 0.24, ease: withEase(e.inOut) } },
};

export const orbMenuItem = (i: number): Variants => ({
  hidden: { opacity: 0, x: -32, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 28, mass: 0.8, delay: 0.2 + i * 0.04 } },
});

export const carouselSlide: Variants = {
  enter: () => ({ x: '100%', opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 38 } },
  exit: () => ({ x: '-100%', opacity: 0, transition: { duration: 0.3, ease: withEase(e.inOut) } }),
};

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 32, mass: 0.9 } },
  exit: { opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.15 } },
};

export const accordionExpand: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: withEase(e.out) } },
};

export const stagger = (delayChildren = 0.06, staggerChildren = 0.06): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
});

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: withEase(e.out) } },
};

export { e as easings };
export type { Variants };
