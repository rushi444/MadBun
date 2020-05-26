/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "sanitize.css"

import { Navbar } from "./Navbar"
import styled from "styled-components"

import insta from "../images/insta.png"
import yelp from "../images/yelp.png"
import facebook from "../images/facebook.png"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <FooterContainer>
          <h4>Call Us:</h4>
          <AddressLink>(909) 517-1188</AddressLink>
          <p />
          <h4>Address:</h4>
          <AddressLink href="https://goo.gl/maps/najyLJdEFQ8SdN7z5">
            4024 Grand Ave, Chino, CA 91710
          </AddressLink>
          <SocialLinks>
            <img
              onClick={() =>
                window.location.assign(
                  "https://www.instagram.com/eatmadbun/?hl=en"
                )
              }
              src={insta}
              alt="Instagram Link"
            />
            <img
              onClick={() =>
                window.location.assign("https://www.yelp.com/biz/madbun-chino")
              }
              src={yelp}
              alt="Yelp Link"
            />
            <img
              onClick={() =>
                window.location.assign(
                  "https://www.facebook.com/pages/category/Restaurant/Madbun-277537146436286/"
                )
              }
              src={facebook}
              alt="Facebook Link"
            />
          </SocialLinks>
        </FooterContainer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 0;
  margin: 0 auto;
  background-color: lightgray;
`

const AddressLink = styled.a`
  text-decoration: underline;
`
const SocialLinks = styled.div`
display: flex; 
margin: 0 auto;
justify-content: space-around;
width: 20%;
img {
  margin: 2% 10%;
  height: 30px;
  width: 30px;
}
@media(max-width: 700px){
  width: 80%:
}
`

export default Layout
