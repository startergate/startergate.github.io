module.exports = {
  siteMetadata: {
    title: `STARTERGATE`,
    description: `I'm STARTERGATE. Backend Developer`,
    author: `@startergate`,
    languages: {
      defaultLangKey: `ko`,
      langs: [`ko`, `en`],
    },
  },
  plugins: [
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
        name: `STARTERGATE`,
        short_name: `STG`,
        start_url: `/`,
        background_color: `#3D414D`,
        theme_color: `#3D414D`,
        display: `minimal-ui`,
        icon: `src/images/startergate.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "./src/util/typography"
      }
    }
  ]
}
