import React from 'react'
import styled, { css } from 'styled-components'
import SideCard from './SideCard'
import UserSearchbar from './UserSearchbar'

const StyledSideBar = styled.div`
    width: 25vw;
    height: 100vh;
    background-color: var(--white-color);
`

const SideBar = () => {
    return (
        <StyledSideBar>
            <UserSearchbar/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
        </StyledSideBar>
    )
}

export default SideBar