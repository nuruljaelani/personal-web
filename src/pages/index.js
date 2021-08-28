import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Skill from "../components/skill"
import Project from "../components/project"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Profile />
    <Skill />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
