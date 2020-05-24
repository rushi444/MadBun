import React from "react"
import { StyledItem, StyledPrice } from "./BigBuns"

export const FamilyMeals = () => {
  return (
    <div>
      <h1>Family Meals</h1>
      <ul style={{ padding: "2%", listStyleType: "none" }}>
        <StyledItem>
          <div>
            <h4 style={{ fontSize: "1.5rem" }}>Mad Platter</h4>
            <ul style={{ padding: "1rem" }}>
              <li>Any 4 Sliders</li>
              <li>4 Chicken Tenders</li>
              <li>Any Loaded Fries</li>
            </ul>
          </div>
          <StyledPrice>$29.99</StyledPrice>
        </StyledItem>
        <StyledItem>
          <div>
            <h4 style={{ fontSize: "1.5rem" }}>Mad Care Package</h4>
            <ul style={{ padding: "1rem" }}>
              <li>Any 4 Big Buns</li>
              <li>1 Large Order of Fries</li>
            </ul>
          </div>
          <StyledPrice>$29.99</StyledPrice>
        </StyledItem>
      </ul>
    </div>
  )
}
