import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="mx-auto sm:w-192">
        <div className="document">
          <header>
            <h1 className="document__title">
              Hi, I'm Wei Meng
            </h1>
          </header>

          <div className="document__body">
            <p>Find me around the web</p>

            <ul>
              <li>
                <a href="https://twitter.com/weimeng">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/weimeng/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/weimeng">GitHub</a>
              </li>
              <li>
                <a href="https://gitlab.com/weimeng">GitLab</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/weimeng">Goodreads</a>
              </li>
            </ul>

            <p>
              This website is built with <a href="https://www.gatsbyjs.com/docs/">Gatsby</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hi, I'm Wei Meng · Wei Meng's website</title>
