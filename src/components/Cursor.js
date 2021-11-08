import React, { useState } from 'react';
import styled from 'styled-components';

const CursorWrapper = styled.div`
    position: absolute;
    left: ${props => props.cursorX}px;
    top: ${props => props.cursorY}px;
    width: 20rem;
    height: 20rem;
    background-color: var(--color-white);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 100ms ease;
    mix-blend-mode: overlay;
    pointer-events: none;
    user-select: none;
    display: none;
`;

const Cursor = () => {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    document.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })

    return(
        <CursorWrapper className="cursor" cursorX={cursorX} cursorY={cursorY}></CursorWrapper>
    )
}

export default Cursor;
