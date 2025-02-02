module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' }
        // Add additional pages here if needed
      };
    }
  };