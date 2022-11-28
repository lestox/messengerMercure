import React from 'react'
import styled, { css } from 'styled-components'


const StyledNavButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
`

const StyledImg = styled.img`
    scale: 0.9;
`


const NavButton = ({ logoSvg, ...props }) => {
    return (
        <StyledNavButton logoSvg={logoSvg} {...props}>
            <StyledImg src={logoSvg}/>
        </StyledNavButton>
    )
}

export default NavButton