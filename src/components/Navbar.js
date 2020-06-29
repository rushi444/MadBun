import React from "react"
import styled from "@emotion/styled"
import logo from "../images/logo.jpg"

export const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="logo" />
      <nav>
        <a href="#about">ABOUT</a>
        <a href="#menu">MENU</a>
        <ThemeButton
          onClick={() =>
            window.location.assign(
              "https://www.doordash.com/store/madbun-chino-706636/en-US/?utm_campaign=gpa"
            )
          }
        >
          ORDER
        </ThemeButton>
      </nav>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.header`
  display: flex;
  margin: 0 auto;
  margin: 0.5% 0;
  padding: 0 2%;
  width: 100%;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  img {
    height: 4.5rem;
    width: 4.5rem;
  }
  p {
    display: none;
  }
  nav {
    width: 40%;
    display: flex;
    justify-content: space-between;
    a {
      color: black;
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      :hover {
        color: #79cb10;
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 1% 0;
    margin-right: 0;
    nav {
      margin-top: 1%;
      width: 90%;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 1.5%;
    }
  }
  @media (max-width: 300px) {
    nav {
      flex-direction: column;
    }
  }
`

const ThemeButton = styled.button`
  border: none;
  color: white;
  background-color: #79cb10;
  border-radius: 7px;
  height: 1.8rem;
  width: 5rem;
`
