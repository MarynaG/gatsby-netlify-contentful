const SPACE = process.env.CTF_SPACE
const TOKEN = process.env.CTF_TOKEN
const HOST = process.env.CTF_HOST

const TITLE =
  HOST === 'preview.contentful.com' ? 'Using Preview API' : 'Using Delivery API'

module.exports = {
  siteMetadata: {
    title: TITLE,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE,
        accessToken: TOKEN,
        host: HOST,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
