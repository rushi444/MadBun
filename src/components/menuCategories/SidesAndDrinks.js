import React from "react"
import { StyledItem, StyledPrice } from "./BigBuns"

export const SidesAndDrinks = () => {
  return (
    <div>
      <h1>Sides & Drinks</h1>
      <ul style={{ padding: "2%", listStyleType: "none" }}>
        <StyledItem>
          <h4>Fries</h4>
          <StyledPrice>$3.29</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Tots</h4>
          <StyledPrice>$4.29</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Water Bottle</h4>
          <StyledPrice>$1.95</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Can Soda</h4>
          <StyledPrice>$1.95</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Bottle Soda</h4>
          <StyledPrice>$2.50</StyledPrice>
        </StyledItem>
      </ul>
    </div>
  )
}
