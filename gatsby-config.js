module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.example.com",
    title: "My First Gatsby Site CSC496",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://csc496wordpress.tldr.dev/graphql',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false
      }
    },
  ],
};
