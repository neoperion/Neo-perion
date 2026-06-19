/**
 * Cubic-bezier easing tokens for non-spring animations.
 *
 * Use these for simple duration-based transitions where a full spring
 * would be overkill (toasts, simple fades, opacity toggles).
 */

export const easings = {
  /** Expo out — primary ease for most UI motion. */
  out: [0.16, 1, 0.3, 1] as const,

  /** Smooth in-out for symmetric motion. */
  inOut: [0.65, 0, 0.35, 1] as const,

  /** Back-out for emphasis (entrance only). */
  bounce: [0.34, 1.56, 0.64, 1] as const,

  /** Linear — only for continuous loops (marquees, spinners). */
  linear: [0, 0, 1, 1] as const,

  /** Standard ease-in for exits. */
  in: [0.7, 0, 0.84, 0] as const,

  /** Custom — liquid ease for glass morphs. */
  liquid: [0.22, 1, 0.36, 1] as const,
} as const;

export type EasingPreset = keyof typeof easings;
