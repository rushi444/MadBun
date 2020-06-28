import React from "react"
import styled from "@emotion/styled"
import aboutImage from "../images/insert-picture-here.jpg"
export const About = () => {
  return (
    <AboutContainer id="about">
      <h1>About Us</h1>
      <AboutUsDetails>
        <img src={aboutImage} alt="insert image" />
        <p>
          Madbun specializes in sliders, burgers, loaded fries, and chicken
          tenders with a taste of Asian street food culture in every bite. We
          take Asian flavors and mix it with a California flare to give our
          guests a brand new twist on Asian American comfort food. The founders
          of Madbun come from a Korean, Filipino, Vietnamese, and American
          upbringing so you’ll be sure to find bits and pieces of each culture
          in our various items. Our number 1 goal is to serve delicious Asian
          American comfort food. Every slider and burger is carefully
          handcrafted using high quality ingredients and house made sauces. With
          each bite, we strive to make sure our guests go mad for Madbun!
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
