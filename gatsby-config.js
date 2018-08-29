module.exports = {
  siteMetadata: {
    title: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rock salt`,
          `open sans\:300,400,600,700`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-50789762-5',
        head: true,
      },
    },
  ],
}
