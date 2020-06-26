module.exports = {
  siteMetadata: {
    title: 'Daylen',
    description: 'A theme using the carbon design system',
    keywords: 'Daylen Nguyen,gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-nprogress',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Calpa's Blog",
        short_name: 'Calpa',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline', // put this after gatsby-plugin-manifest
    'gatsby-plugin-netlify-cms'
  ],
};
