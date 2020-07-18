import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image, { ImageOne } from "../components/SlideShowImages/ImageOne"
import SEO from "../components/seo"
import "../components/index.css"
import { Menu } from "../components/Menu"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../components/theme"
import { About } from "../components/About"
// import { SlideShow } from "../components/SlideShow"

const IndexPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="MAD BUN" />
      <div style={{ overflow: 'hidden'}}>
        {/* <SlideShow /> */}
        <ImageOne />
      </div>
      <About />
      <Menu />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
