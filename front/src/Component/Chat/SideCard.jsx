import React from 'react'
import styled, { css } from 'styled-components'
import UserImage from '../Global/UserImage'

const StyledSideCard = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 15px 0px 15px 20px;
    
    &:hover {
        background-color: #172d95;
        cursor: pointer;
      }
`

const StyledName = styled.h3`
    margin-left: 15px;
    margin-bottom: 0;
    font-weight: 500;
`

const SideCard = () => {
    return (
        <>
        <StyledSideCard>
            <UserImage/>
            <StyledName>Paul Pogba</StyledName>
        </StyledSideCard>
        </>
    )
}

export default SideCard