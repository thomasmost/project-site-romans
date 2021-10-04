module.exports = {
  siteMetadata: {
    title: `Romans`,
    description: `Romans is a three-actor immersive cage match on the nature of citizenship and our relationship to the state.`,
    author: `@thomascmost`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Romans`,
        short_name: `romans`,
        start_url: `/`,
        background_color: `#dd774c`,
        theme_color: `#dd774c`,
        display: `minimal-ui`,
        icon: `src/ico/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
