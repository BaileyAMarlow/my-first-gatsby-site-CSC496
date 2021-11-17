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
    pageText,
  } from './layout.module.css'
import {
    headingDark,
    navLinksDark,
    navLinkItemDark,
    navLinkTextDark,
    pageTextDark,
} from './layoutdark.module.css'
import { createGlobalStyle } from 'styled-components'

const Layout = ({ pageTitle, children }) => {
  const [isDark, setDark] = React.useState(false)

  const GlobalStyle = createGlobalStyle`
  body {
    background-color : ${isDark ? "black" : "white"}
  }
  h1,
  h2,
  p,
  ul,
  li {
    color : ${isDark ? "white" : "black"}
  }
  `

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
    <div className={container}>
      <GlobalStyle/>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
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
      <h2 className={isDark ? pageTextDark : pageText}>
        Dark Mode is {isDark ? "on" : "off"}
      </h2>
      </main>
    </div>
  )
}

export default Layout