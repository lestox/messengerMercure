import React from 'react'
import styled, { css } from 'styled-components'
import SideCard from './SideCard'

const StyledConvUpperBar = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 20px;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--light-border-color);
`

const ConvUpperBar = () => {
    return (
        <StyledConvUpperBar>
            <h2>Chats</h2>
        </StyledConvUpperBar>
    )
}

export default ConvUpperBar