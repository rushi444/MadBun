import React from "react"
import styled from "@emotion/styled"
import aboutImage from "../images/insert-picture-here.jpg"
export const About = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <AboutUsDetails>
        <img src={aboutImage} alt="insert image" />
        <p>
          Mad Bun is..............a paragraph about the company...............
          Let me know about background color here
        </p>
      </AboutUsDetails>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  background-color: #9fcb10;
  margin-top: 0;
  height: 50vh;
  h1 {
    text-align: center;
    padding-left: 5%;
    text-align: left;
    font-size: 2rem;
  }
  @media (max-width: 700px) {
    height: 80vh;
  }
`

const AboutUsDetails = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    width: 60%;
  }
  @media (max-width: 700px) {
    display: block;
    p {
      width: 90%;
    }
  }
`
