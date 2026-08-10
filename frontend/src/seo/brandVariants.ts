/**
 * AINCURU - Brand Variants and Search Aliasing Configuration
 * 
 * This file maintains the controlled list of likely search variants for AINCURU.
 * It is NOT used for keyword stuffing or doorway pages.
 * It is used for internal search typo-tolerance and maintaining a documented source of truth
 * for our GEO (Generative Engine Optimization) and search discovery strategy.
 */

export const brandVariants = {
  official: [
    "AINCURU",
    "AINCURU LLP",
    "AINCURU Solutions"
  ],

  spacingVariants: [
    "AIN CURU",
    "AIN-CURU"
  ],

  commonMisspellings: [
    "AINCUR",
    "AINCURO",
    "AINCURUU"
  ],

  serviceVariants: [
    "AINCURU AI",
    "AINCURU software",
    "AINCURU automation",
    "AINCURU product development",
    "AINCURU web development",
    "AINCURU app development",
    "AINCURU UI UX",
    "AINCURU RAG",
    "AINCURU AI agents"
  ]
};

/**
 * searchAliases
 * 
 * A controlled alias mapping system for the internal search (e.g. Blog Search).
 * Maps common typos and spelling variations strictly to correct internal terminology.
 */
export const searchAliases: Record<string, string> = {
  // Brand Typos
  "aincur": "aincuru",
  "aincuro": "aincuru",
  "aincuruu": "aincuru",
  "ain curu": "aincuru",
  "ain-curu": "aincuru",

  // Service Typos
  "ai automaton": "ai automation",
  "product enginering": "product engineering",
  "software developement": "software development",
  "web devlopment": "web development",
  "artifical intelligence": "artificial intelligence",
  "gen ai": "generative ai",
  "uiux": "ui ux",
  "ui/ux": "ui ux",
};

/**
 * normalizeSearchQuery
 * 
 * Normalizes user search input before querying internal APIs (e.g. Supabase).
 * Handles lowercasing, whitespace trimming, repeated spaces, hyphens, and typo aliasing.
 * 
 * @param query The raw string from the search input
 * @returns The normalized, alias-mapped query string
 */
export function normalizeSearchQuery(query: string): string {
  if (!query) return '';

  // 1. Lowercase and basic trim
  let normalized = query.toLowerCase().trim();

  // 2. Normalize repeated spaces
  normalized = normalized.replace(/\s+/g, ' ');

  // 3. Normalize common punctuation that breaks internal search
  // Remove hyphens if they are surrounded by letters (e.g. ai-automation -> ai automation)
  normalized = normalized.replace(/([a-z])-([a-z])/g, '$1 $2');

  // 4. Exact alias mapping
  // We check the exact normalized string against our alias map first.
  if (searchAliases[normalized]) {
    return searchAliases[normalized];
  }

  // 5. Token-level alias mapping (basic fuzzy support without heavy dependencies)
  // If the exact string didn't match, we check if individual tokens are in the alias map.
  const tokens = normalized.split(' ');
  const mappedTokens = tokens.map(token => {
    return searchAliases[token] || token;
  });

  return mappedTokens.join(' ');
}
