import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"

type DataProps = {
  asciidoc: {
    html: string
    document: {
      title: string
      subtitle: string
      main: string
    }
    _pageAttributes: {
      path: string
    }
  }
}

const PageRoute = ({ data: { asciidoc } }: PageProps<DataProps>) => {
  const { html, document, _pageAttributes } = asciidoc

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

export const pageQuery = graphql`
  query ($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
        subtitle
        main
      }
      pageAttributes {
        path
      }
    }
  }
`
