module.exports = {
  ci: {
    collect: {
      // Build the project before running Lighthouse
      buildScript: 'build',
      // The directory containing the build output
      staticDistDir: './dist',
      // Serve the build and run Lighthouse against the root
      url: ['http://localhost/'],
      numberOfRuns: 3,
    },
    assert: {
      // Use the standard 'recommended' preset
      preset: 'lighthouse:recommended',
      assertions: {
        // You can customize strictness here if the build fails, for example:
        // 'categories:performance': ['warn', {minScore: 0.9}],
        // 'categories:accessibility': ['error', {minScore: 0.9}]
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
