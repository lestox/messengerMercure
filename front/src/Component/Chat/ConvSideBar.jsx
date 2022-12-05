import React from 'react'
import styled, { css } from 'styled-components'
import SideCard from './SideCard'
import UserSearchbar from './UserSearchbar'
import ConvUpperBar from './ConvUpperBar'

const StyledSideBar = styled.div`
    width: 25vw;
    height: 100vh;
    background-color: var(--white-color);
`

const SideCardContainer = styled.div`
    overflow-y: scroll;
    height: 90vh;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

const ConvSideBar = () => {
    return (
        <StyledSideBar>
            <ConvUpperBar/>
            <SideCardContainer>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
            </SideCardContainer>
        </StyledSideBar>
    )
}

export default ConvSideBar