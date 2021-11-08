import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
    background-color: var(--color-white);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

const Skills = () => {
    return(
        <SkillsWrapper className="skills" id="skills">

        </SkillsWrapper>
    )
}

export default Skills;
