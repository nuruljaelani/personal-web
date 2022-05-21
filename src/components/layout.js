/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "@fontsource/ibm-plex-mono" // Defaults to weight 400.
import "@fontsource/roboto" // Defaults to weight 400.

const Layout = ({ children, profile, skills, projects, contact, options }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} profile={profile} skills={skills} projects={projects} contact={contact} options={options} />
        <main className="mt-20 md:mt-32 max-w-8xl mx-auto">{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
          className="text-center py-8"
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
