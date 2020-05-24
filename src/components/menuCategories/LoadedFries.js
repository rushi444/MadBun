import React from "react"
import { StyledItem, StyledPrice } from "./BigBuns"

export const LoadedFries = () => {
  return (
    <div>
        <h1>Loaded Fries</h1>
      <ul style={{ padding: "2%", listStyleType: "none" }}>
        <StyledItem>
          <h4>Corn Cheese</h4>
          <StyledPrice>$7</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>KBBQ</h4>
          <StyledPrice>$7.49</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Spicy Pork Belly</h4>
          <StyledPrice>$7.49</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Cheeseburger</h4>
          <StyledPrice>$7.49</StyledPrice>
        </StyledItem>
      </ul>
    </div>
  )
}
