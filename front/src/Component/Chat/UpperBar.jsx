import React from 'react'
import styled, { css } from 'styled-components'
import UserImage from '../Global/UserImage'

const StyledUpperBar = styled.div`
    width: calc(100vw - (70px + 25vw));
    height: 10vh;
    border: none;
    color: lightgray;
    background-color: var(--white-color);
    padding: 15px 40px;
    outline: none;
    position: fixed;
    top: 0;
    display: flex;
`

const StyledTextContainer = styled.div`
    margin-left: 16px;
    margin-top: 5px;

`



const UpperBar = () => {
    return (
        <StyledUpperBar>
            <UserImage/>
            <StyledTextContainer>
                <h2>Paul Pogba</h2>
                <span>Online</span>
            </StyledTextContainer>
        </StyledUpperBar>
    )
}

export default UpperBar