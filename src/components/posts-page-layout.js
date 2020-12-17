import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { Helmet } from "react-helmet"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate(props) {
  const { data, location } = props
  const { mdx } = data
  const siteTitle = data?.site.siteMetadata.title || `Title`
  let featuredImage =
    mdx?.frontmatter?.featuredImage?.childImageSharp?.fluid?.src
  featuredImage = featuredImage && `https://giovannibenussi.com${featuredImage}`

  return (
    <Layout location={location} title={siteTitle}>
      {process.env.ENABLE_GOOGLE_ANALYTICS && (
        <Helmet>
          <script src="https://www.googletagmanager.com/gtag/js?id=G-KM87KM1KX1"></script>
          <script>{`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-KM87KM1KX1');
        `}</script>
        </Helmet>
      )}
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
        description
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
