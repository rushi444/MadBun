import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/index.css"
import { Menu } from "../components/Menu"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../components/theme"
import { About } from "../components/About"

const IndexPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="MAD BUN" />
      <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
        <Image />
      </div>
      <About />
      <Menu />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
