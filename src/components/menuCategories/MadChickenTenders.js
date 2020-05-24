import React from "react"
import { StyledPrice, StyledItem } from "./BigBuns"
import { Flex } from "@chakra-ui/core"

export const MadChickenTenders = () => {
  return (
    <div>
      <h1>Mad Chicken Tenders</h1>

      <ul style={{ padding: "2%", listStyleType: "none" }}>
        <StyledItem>
          <h4>Sweet Chili</h4>
          <StyledPrice>4pc $5.99</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Soy Garlic</h4>
          <StyledPrice>4pc $5.99</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Mad Hot</h4>
          <StyledPrice>4pc $5.99</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Plain</h4>
          <StyledPrice>4pc $5.99</StyledPrice>
        </StyledItem>
      </ul>
    </div>
  )
}
