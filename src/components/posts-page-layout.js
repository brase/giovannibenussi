import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate(props) {
  const { data, location } = props
  const { mdx } = data
  const siteTitle = data?.site.siteMetadata.title || `Title`
  let featuredImage =
    mdx?.frontmatter?.featuredImage?.childImageSharp?.fluid?.src
  featuredImage =
    featuredImage && `https://giovannibenussi.com/${featuredImage}`
  console.log("featuredImage", featuredImage)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
        image={featuredImage}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{mdx.frontmatter.title}</h1>
          <p>{mdx.frontmatter.date}</p>
        </header>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
