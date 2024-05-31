import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
  </Layout>
)

export const Head = () => <Seo title="Page two" />
export default SecondPage
