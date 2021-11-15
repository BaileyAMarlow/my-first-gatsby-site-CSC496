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
import { css, useTheme } from 'styled-components'
import Context from '../store/context'
import { Global } from "@emotion/react"

const Layout = ({ pageTitle, children }) => {
  const { state } = React.useContext(Context);

  const theme = useTheme();

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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.backgroud};
          }
        `}
      />
      {children}
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <Navbar />
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
                About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout