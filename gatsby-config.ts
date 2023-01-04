import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wei Meng's website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  trailingSlash: `never`,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "asciidoc-docs",
        path: `${__dirname}/src/documents`
      }
    },
    "gatsby-transformer-asciidoc"
  ]
};

export default config;
