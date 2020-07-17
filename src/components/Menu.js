import React from "react"
import styled from "@emotion/styled"
import { Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/core"
import { BigBuns } from "./menuCategories/BigBuns"
import { LoadedFries } from "./menuCategories/LoadedFries"
import { Sliders } from "./menuCategories/Sliders"
import { MadChickenTenders } from "./menuCategories/MadChickenTenders"
import { FamilyMeals } from "./menuCategories/FamilyMeals"
import { SidesAndDrinks } from "./menuCategories/SidesAndDrinks"

export const Menu = () => {
  return (
    <MenuContainer id='menu'>
      <h1>MENU</h1>
      <Tabs variant="soft-rounded" variantColor="green">
        <StyledTabList>
          <StyledTab>Big Buns</StyledTab>
          <StyledTab>Loaded Fries</StyledTab>
          <StyledTab>Sliders</StyledTab>
          <StyledTab>Mad Chicken Tenders</StyledTab>
          <StyledTab>Family Meals</StyledTab>
          <StyledTab>Sides & Drinks</StyledTab>
        </StyledTabList>
        <TabPanels style={{ maxWidth: "800px", margin: "0 auto" }}>
          <TabPanel>
            <BigBuns />
          </TabPanel>
          <TabPanel>
            <LoadedFries />
          </TabPanel>
          <TabPanel>
            <Sliders />
          </TabPanel>
          <TabPanel>
            <MadChickenTenders />
          </TabPanel>
          <TabPanel>
            <FamilyMeals />
          </TabPanel>
          <TabPanel>
            <SidesAndDrinks />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  height: 80vh;
  h1 {
    text-align: center;
    padding-left: 5%;
    text-align: left;
    font-size: 2rem;
  }
  @media(max-width: 700px){
    min-height: 90vh;
  }
`

const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: space-around;
  padding: 1% 3%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: initial;
  }
`

const StyledTab = styled(Tab)`
font-size: .9rem;
white-space: nowrap;
`
