module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "KristaPortfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat`, //basic font
          `prosto one` // logo font/ headers
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
