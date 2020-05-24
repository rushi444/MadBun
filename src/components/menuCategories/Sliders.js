import React from "react"
import styled from "@emotion/styled"
import { StyledItem, StyledPrice } from "./BigBuns"

export const Sliders = () => {
  return (
    <div>
      <h1>Sliders</h1>
      <SliderHeader>
        <h2>Portugese - Bao</h2>
      </SliderHeader>
      <ul style={{ padding: "2%", listStyleType: "none" }}>
        <StyledItem>
          <h4>Corn Cheese</h4>
          <StyledPrice>$5.25</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>KBBQ</h4>
          <StyledPrice>$5.25</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Spicy Pork Belly</h4>
          <StyledPrice>$5.25</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Cheeseburger</h4>
          <StyledPrice>$5.25</StyledPrice>
        </StyledItem>
      </ul>
    </div>
  )
}

const SliderHeader = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 1.3rem;
  }
  div {
    align-items: center;
  }
`
