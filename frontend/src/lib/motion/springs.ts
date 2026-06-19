/**
 * Centralized spring presets for Framer Motion.
 *
 * Apple / Linear / Vercel level polish. Each spring has a specific feel —
 * never use the same spring for a button press as a modal open.
 *
 * Rule: Lower stiffness + higher damping = slower, heavier feel.
 *       Higher stiffness + lower damping = snappier.
 */

import type { Transition } from 'framer-motion';

type Spring = Transition & { type: 'spring' };

export const springs = {
  /** Apple-level button press — instant tactile feedback. */
  press: {
    type: 'spring',
    stiffness: 800,
    damping: 35,
    mass: 0.5,
  } satisfies Spring,

  /** Modal / sheet open — smooth, confident, not bouncy. */
  modal: {
    type: 'spring',
    stiffness: 320,
    damping: 32,
    mass: 0.9,
  } satisfies Spring,

  /** Full-screen menu / overlay — confident but a touch lively. */
  menu: {
    type: 'spring',
    stiffness: 380,
    damping: 28,
    mass: 0.8,
  } satisfies Spring,

  /** Carousel snap — fast precision. */
  snap: {
    type: 'spring',
    stiffness: 500,
    damping: 38,
  } satisfies Spring,

  /** Page transition — natural, not abrupt. */
  page: {
    type: 'spring',
    stiffness: 260,
    damping: 26,
  } satisfies Spring,

  /** Gentle floating idle animations. */
  float: {
    type: 'spring',
    stiffness: 120,
    damping: 14,
    mass: 1,
  } satisfies Spring,

  /** Snappy press feedback for AI Orb and magnetic buttons. */
  magnetic: {
    type: 'spring',
    stiffness: 600,
    damping: 24,
    mass: 0.4,
  } satisfies Spring,

  /** Slow elegant reveal for stagger children. */
  stagger: {
    type: 'spring',
    stiffness: 200,
    damping: 22,
  } satisfies Spring,
} as const;

export type SpringPreset = keyof typeof springs;
