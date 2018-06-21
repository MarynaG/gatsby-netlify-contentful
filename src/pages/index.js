import React from 'react'
import Link from 'gatsby-link'


const Article = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <ul>
   {data.allContentfulArticle.edges.map((edge) => <Article node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulArticle (
      filter: {
        node_locale: {eq: "en-US"}
      }
    ) {
        edges {
          node {
            title
            slug
          }
        }
      }
  }
`
