import * as React from "react"
import { graphql, PageProps } from "gatsby"

type DataProps = {
  asciidoc: {
    html: string
    _document: {
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
  const { html, _document, _pageAttributes } = asciidoc

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
