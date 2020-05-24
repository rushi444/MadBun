import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import logo from "../images/logo.jpg"

export const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/menu">MENU</Link>
        <Link to="/location">LOCATION</Link>
        <Link to="/about">ABOUT</Link>
        <ThemeButton>ORDER</ThemeButton>
      </nav>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.header`
  display: flex;
  margin: 0 auto;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  width: 90%;
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
    width: 50%;
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
    margin: 1%;
    nav {
      margin-top: 1%;
      width: 90%;
      flex-direction: row;
      align-items: center;
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
