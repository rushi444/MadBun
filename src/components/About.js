import React from "react"
import styled from "@emotion/styled"

export const About = () => {
  return (
    <AboutContainer id="about">
      <h1>ABOUT US</h1>
      <AboutUsDetails>
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
  justify-content: space-around;
  background-color: #9fcb10;
  margin-top: 0;
  height: auto;
  min-height: 50vh;
  padding: 1%;
  h1 {
    text-align: center;
    padding-left: 5%;
    text-align: left;
    font-size: 2rem;
  }
  @media (max-width: 700px) {
    padding: 2% 1% 
    margin: auto
  }
`

const AboutUsDetails = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font-size: 1.7rem;
    width: 80%;
  }
  @media (max-width: 700px) {
    display: block;
    p {
      font-size: 1rem;
      margin: auto;
      width: 90%;
      padding: 3%;
    }
  }
`
