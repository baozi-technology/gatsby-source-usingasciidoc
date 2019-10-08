module.exports = {
  siteMetadata: {
    title: `Gatsby with Drupal`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-asciidoc`,
      options: {
        attributes: {
          safe: `safe`,
          attributes: ["allow-uri-read",]

        },
      },
    },     {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
