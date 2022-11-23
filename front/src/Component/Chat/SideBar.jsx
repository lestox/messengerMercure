import React from 'react'
import styled, { css } from 'styled-components'
import SideCard from './SideCard'
import UserSearchbar from './UserSearchbar'

const StyledSideBar = styled.div`
    width: 280px;
    height: 100vh;
    border-right: 0.1px solid #172d95;
`

const SideBar = () => {
    return (
        <>
        <StyledSideBar>
            <UserSearchbar/>
            <SideCard></SideCard>
            <SideCard></SideCard>
        </StyledSideBar>
        </>
    )
}

export default SideBar