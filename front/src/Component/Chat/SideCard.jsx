import React from 'react'
import styled, { css } from 'styled-components'

const StyledSideCard = styled.div`
    width: 280px;
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 15px 0px 15px 20px;
    position: absolute;
    
    &:hover {
        background-color: #172d95;
        cursor: pointer;
      }
`
const StyledImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`

const StyledName = styled.h4`
    margin-left: 15px;
    font-size: 1.2rem;
    margin-bottom: 0;
`

const SideCard = () => {
    return (
        <>
        <StyledSideCard>
            <StyledImg src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User profil picture"/>
            <StyledName>Paul Pogba</StyledName>
        </StyledSideCard>
        </>
    )
}

export default SideCard