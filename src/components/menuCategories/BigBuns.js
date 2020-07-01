import React from "react"
import styled from "@emotion/styled"

export const BigBuns = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2rem" }}>Big Buns</h1>
      <ul style={{ padding: "2%", listStyleType: "none" }}>
        <StyledItem>
          <h4>Double Bacon Cheeseburger</h4>
          <StyledPrice>$9.49</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Thai Sweet Chili Fried Chicken</h4>
          <StyledPrice>$9.49</StyledPrice>
        </StyledItem>
        <StyledItem>
          <h4>Mad Hot Chicken</h4>
          <StyledPrice>$9.49</StyledPrice>
        </StyledItem>
      </ul>
    </div>
  )
}

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  h4 {
    font-size: 1.5rem;
  }
`
export const StyledPrice = styled.div`
  white-space: nowrap;
  padding: 0.2rem 0.3rem;
  background-color: #79cb10;
  border-radius: 7px;
  height: 2rem;
`
