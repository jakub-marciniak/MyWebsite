import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from './device';

const animatedPosition = keyframes`
  from {
    top: -100%;
  } to {
    top: 0;
  }
`;

const animatedMarginVertical = keyframes`
  from {
    margin: 1.25em;
  } to {
    margin: 0.25em;
  }
`; 

const MenuWrapper = styled.div`
  z-index: 1;
  width: 3rem;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--color-darkwhite);

  @media ${device.mobile} {
    width: 100%;
    height: 3rem;
    flex-flow: row nowrap;
    align-content: center;
    justify-content: flex-end;
  }
`;

const Nav = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  animation: ${animatedPosition} 900ms ease-out 1;

  @media ${device.mobile} {
    display: none;
  }

  & a {
    text-decoration: none;
  }
`;

const List = styled.button`
  display: none;
  
  background-color: var(--color-darkwhite);
  border: none;
  font-size: 2em;
  color: var(--color-black);
  align-text: center;
  line-height: 1.75em;
  vertical-align: center;
  cursor: pointer;

  & ion-icon {
    align-text: center;
    vertical-align: center;
  }

  @media ${device.mobile} {
    display: block;
    width: 3rem;
    height: 100%;
    flex-flow: row nowrap;
  }
`;

const Button = styled.button`
  width: 12em;
  margin: 0.25em;
  padding: 0.5em 0.75em;
  position: relative;
  left: -6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  background-color: ${props => props.primary ? "var(--color-primary)" : "var(--color-darkwhite)"};
  border: none;
  border-right: 0.15em solid ${props => props.primary ? "var(--color-primary)" : "var(--color-secondary)"};
  font-size: 1.25em;
  align-text: center;
  vertical-align: center;
  color: ${props => props.primary ? "var(--color-white)" : "var(--color-black)"};
  
  cursor: pointer;
  transition: left 300ms ease-out, width 300ms ease-out;
  animation: ${animatedMarginVertical} 900ms ease-out 1;

  &:hover {
    width: 12rem;
    left: 2rem;
  }

  & span {
    padding-right: 1.25em;

    font-size: 0.75em;
    font-weight: var(--weight-regular);
    letter-spacing: 0.025em;
    
    transition: padding-right 300ms ease-out;
  }

  &:hover span {
    padding-right: 0.75em;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper className="menu">
      <List>
        <ion-icon name="menu-outline"></ion-icon>
      </List>
      <Nav className="nav">
        <a href="#home">
          <Button primary>
            <span>Home</span>
            <ion-icon name="home-outline"></ion-icon>
          </Button>
        </a>
        <a href="#skills">
          <Button>
            <span>Skills</span>
            <ion-icon name="barbell-outline"></ion-icon>
          </Button>
        </a>
        <a href="#projects">
          <Button>
            <span>Projects</span>
            <ion-icon name="albums-outline"></ion-icon>
          </Button>
        </a>
        <a href="#contact">
          <Button>
            <span>Contact</span>
            <ion-icon name="call-outline"></ion-icon>
          </Button>
        </a>
      </Nav>
    </MenuWrapper>
  );
}

export default Menu;
