import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar/Navbar'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from './layout.module.css'
import {
    containerDark,
    headingDark,
    navLinksDark,
    navLinkItemDark,
    navLinkTextDark,
    siteTitleDark,
} from './layout.moduledark.css'
import { css, useTheme } from 'styled-components'
import Context from '../store/context'
import { Global } from "@emotion/react"

const Layout = ({ pageTitle, children }) => {
  const { state } = React.useContext(Context);

  const theme = useTheme();

  const [isDark, setDark] = React.useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={isDark ? containerDark : container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={isDark ? siteTitleDark : siteTitle}>{data.site.siteMetadata.title}</header>
      <Navbar />
      <nav>
        <ul className={isDark ? navLinksDark : navLinks}>
          <li className={isDark ? navLinkItemDark : navLinkItem}>
              <Link to="/" className={isDark? navLinkTextDark : navLinkText}>
                Home
              </Link>
          </li>
          <li className={isDark ? navLinkItemDark : navLinkItem}>
            <Link to="/about" className={isDark? navLinkTextDark : navLinkText}>
                About
            </Link>
          </li>
          <li className={isDark ? navLinkItemDark : navLinkItem}>
            <Link to="/blog" className={isDark? navLinkTextDark : navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={isDark ? headingDark : heading}>{pageTitle}</h1>
        {children}
        <button onClick={() => setDark(!isDark)} >
        Toggle Dark Mode
        </button>
      <h2>Dark Mode is {isDark ? "on" : "off"}</h2>
      </main>
    </div>
  )
}

export default Layout