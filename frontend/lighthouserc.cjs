// Phase 7 — advisory Lighthouse CI config.
// No assertions: scores are uploaded as artifacts for review only.
// Promote to a real budget after 1–2 weeks of stable runs.
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:4173/',
        'http://localhost:4173/services',
        'http://localhost:4173/company/about',
        'http://localhost:4173/for-us-clients',
        'http://localhost:4173/company/blog',
        'http://localhost:4173/contact'
      ],
      numberOfRuns: 1,
      settings: { preset: 'desktop' },
      staticDistDir: './frontend/dist',
      isSinglePageApplication: true,
    },
    upload: { target: 'temporary-public-storage' },
    assert: { assertions: {} },
  },
};
