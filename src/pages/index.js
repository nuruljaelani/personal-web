import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Skill from "../components/skill"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Profile />
    <Skill />
  </Layout>
)

export default IndexPage
