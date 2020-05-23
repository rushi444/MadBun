import React from "react"
import styled from "@emotion/styled"

export const Menu = () => {
  return (
    <MenuContainer>
      <h1>MENU</h1>
      <FoodItemsContainer>
        <div>column 1</div>
        <div>column 2</div>
        <div>column 3</div>
      </FoodItemsContainer>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  padding: 0 2%;
`

const FoodItemsContainer = styled.div`
display: flex;
justify-content: space-around;
`
