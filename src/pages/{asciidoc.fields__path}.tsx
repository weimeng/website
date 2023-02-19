import * as React from "react"
import { graphql, HeadProps, PageProps } from "gatsby"
import Prism from "prismjs"

import Layout from "../components/layout"

type DataProps = {
  asciidoc: {
    html: string
    document: {
      title: string
      subtitle: string
      main: string
    }
  }
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const PageRoute = ({ data: { asciidoc } }: PageProps<DataProps>) => {
  const { html, document } = asciidoc

  React.useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout>
      <div className="mx-auto sm:w-192">
        <div className="document">
          <header>
            <h1
              className="document__title"
              dangerouslySetInnerHTML={{ __html: document.title }}
            />
          </header>

          <div className="document__body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default PageRoute

export function Head(props: HeadProps<DataProps>) {
  return (
    <title>{props.data.asciidoc.document.title} · {props.data.site.siteMetadata.title}</title>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
        subtitle
        main
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
