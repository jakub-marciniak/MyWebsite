import React from 'react';
import styled, { keyframes } from 'styled-components';
import decoration from '../images/home-decoration.svg';

const animatedPositionLeft = keyframes`
  from {
    left: -100%;
    letter-spacing: 0.5em;
  } to {
    left: 0;
    letter-spacing: 0.05em;
  }
`;

const animatedPositionRight = keyframes`
  from {
    background-position: calc(100% + 20em) calc(100% + 2rem);
  } to {
    background-position: right center;
  }
`;

const HomeWrapper = styled.section`
    padding: 2em 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-white);
    background-image: url(${decoration});
    background-repeat: no-repeat;
    background-size: 200vh;
    background-position: right center;

    animation: ${animatedPositionRight} 750ms ease-out 1;

    & .home__header h1 {
        margin: 2rem 4rem;
        padding-bottom: 1em;
        position: relative;

        font-family: 'Inter', sans-serif;
        font-size: 12em;
        font-weight: var(--weight-black);
        letter-spacing: 0.05em;
        color: var(--color-tertiary);
        text-shadow: -1rem 0.75rem 0 var(--color-secondary);

        transition: letter-spacing 300ms ease-in-out;
        animation: ${animatedPositionLeft} 750ms ease-out 1;
    }

    & .home__header h1:hover {
        letter-spacing: 0.1em;
    }
`;

const Home = () => {
    return(
        <HomeWrapper className="home" id="home">
          <div className="home__header">
            <h1>Hello</h1>
          </div>
          <div className="home__content">
            <p>Text</p>
          </div>
        </HomeWrapper>
    );
}

export default Home;
