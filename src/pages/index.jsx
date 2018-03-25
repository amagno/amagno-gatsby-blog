import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Post from '../components/Post'
import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Header />
        {posts.map(({ node }, index) => {
          console.log(node)
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <Link
              style={{ boxShadow: 0 }}
              className="db ph3 ph0-l no-underline black dim" 
              to={node.fields.slug} key={node.fields.slug}
            >
              <Post 
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                content={node.excerpt} 
                end={(index + 1) === posts.length}
                />
            </Link>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
