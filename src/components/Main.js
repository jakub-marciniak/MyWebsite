import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
//import Cursor from './Cursor';

const MainWrapper = styled.main`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    background-color: var(--color-darkgrey);

    overflow-x: hidden;
    
    & section {
        width: 100vw;
        min-height: 100vh;
        height: 100vh;
    }

    /*& section.about-me:hover {
        cursor: none;
    }

    & section.about-me:hover ~ .cursor {
        display: block;
        background-blend-mode: multiply;
    }*/
`;

const Main = () => {
    return(
        <MainWrapper className="main">
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </MainWrapper>
    );
}

export default Main;
