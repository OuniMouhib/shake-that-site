import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const SmoothScroll = () => {
  return (
    <Nav>
      <Logo onClick={() => scroll.scrollToTop()}>🌊 Ocean Adventure</Logo>
      <Menu>
      
        <NavItem to="facts" smooth duration={800}>Ocean Facts</NavItem>
        <NavItem to="quiz" smooth duration={800}>Quiz</NavItem>
        <NavItem to="games" smooth duration={800}>Games</NavItem>
        <NavItem to="about" smooth duration={800}>About</NavItem>
        <NavItem to="contact" smooth duration={800}>Contact</NavItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #003366;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  color: #e0e0e0;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 10px;
  margin-left: auto; /* Pushes the menu items to the right */
  margin-right: 3px; /* Adjust as needed to create space from the middle */
`;


const NavItem = styled(Link)`
  color: #e0e0e0; /* Elegant text color */
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: color 0.3s, transform 0.3s;
  padding: 5px 10px;

  &:hover {
    color: #00b4d8;
    transform: translateX(5px);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px;
    left: 3px;
    width: 0;
    height: 2px;
    background-color: #00b4d8;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%; /* Underline animation */
  }
`;

export default SmoothScroll;
