import * as React from "react"
import { graphql, PageProps } from "gatsby"

const PostTemplate: React.FC<PageProps> = ({ data }) => {
  const { asciidoc } = data
  const { html, _document, _pageAttributes } = asciidoc

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default PostTemplate

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
