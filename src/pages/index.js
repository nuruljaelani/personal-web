import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Skill from "../components/skill"
import Project from "../components/project"
import Contact from "../components/contact"
import Button from "../components/button"

const IndexPage = () => {

  const profile = React.useRef()
  const skills = React.useRef()
  const projects = React.useRef()
  const contact = React.useRef()

  const options = {
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  }

  return (
    <Layout profile={profile} skills={skills} projects={projects} contact={contact} options={options}>
      <Seo title="Home" />
      <Profile profile={profile} />
      <Skill skills={skills} />
      <Project projects={projects} />
      <Contact contact={contact} />
      <Button />
    </Layout>
  )
} 

export default IndexPage
