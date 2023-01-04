import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions
}) => {
  const { createNodeField } = actions

  if (node.internal.type === "Asciidoc") {
    const path = createFilePath({ node, getNode, trailingSlash: false })

    createNodeField({
      node,
      name: "path",
      value: path,
    })
  }
}
