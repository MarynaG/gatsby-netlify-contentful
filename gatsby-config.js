const CTF_SPACE_ID = 'aruaa2c3pv2g'

const CTF_DELIVERY_HOST = 'cdn.contentful.com'
const CTF_DELIVERY_TOKEN = '25d5baccd57b34568c50b86bf2aee206244e3e81b279b03f1e59454ccf2469dd'

const CTF_PREVIEW_HOST = 'preview.contentful.com'
const CTF_PREVIEW_TOKEN = '244cc59b6b5b0d2e7728dde8934440db07a7954adf5b7410a96954b7053af76a'

const TOKEN = process.env.ENVIRONMENT === 'preview' ? CTF_PREVIEW_TOKEN : CTF_DELIVERY_TOKEN
const HOST = process.env.ENVIRONMENT === 'preview' ? CTF_PREVIEW_HOST : CTF_DELIVERY_HOST

const TITLE = process.env.ENVIRONMENT === 'preview' ? 'Preview' : 'Published'

module.exports = {
  siteMetadata: {
    title: TITLE,
  },
  plugins: [
    {
      'resolve': 'gatsby-source-contentful',
      options: {
        spaceId: CTF_SPACE_ID,
        accessToken: TOKEN,
        host: HOST
      }
    },
    'gatsby-plugin-react-helmet'],
}
