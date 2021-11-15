// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { useTheme } from 'styled-components'
import Context from '../store/context'
import { css } from 'styled-components'

// Step 2: Define your component
const IndexPage = () => {
  const { state, dispatch } = React.useContext(Context)
  const theme = useTheme();

  return (
    <Layout pageTitle="Home Page">
      {/* < div
          styles={css`
          h1,
          h2 {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}>  */}
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A very neat and proper boi in tha water"
        src="/home/bailey/my-gatsby-site-CSC496/src/images/manatee.jpeg"
      />
      {/* </div> */}
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage