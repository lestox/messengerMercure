import React from 'react'
import styled, { css } from 'styled-components'
import UserImage from '../Global/UserImage'

const StyledUpperBar = styled.div`
    width: 100%;
    height: 7vh;
    border: none;
    color: lightgray;
    padding: 20px;
    outline: none;
    position: fixed;
    top: 0;
    display: flex;
`



const UpperBar = () => {
    return (
        <StyledUpperBar>
            <UserImage/>
            <h3>Paul Pogba</h3>
        </StyledUpperBar>
    )
}

export default UpperBar