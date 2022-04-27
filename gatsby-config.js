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
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`, //basic font
          `Prosto One` // logo font/ headers
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
