import React from 'react'
import styled, { css } from 'styled-components'
import NavButton from './NavButton'
import chatSvg from '../../assets/svg/sidebar/chat.svg'
import accountSvg from '../../assets/svg/sidebar/account.svg'
import settingSvg from '../../assets/svg/sidebar/settings.svg'
import darkmodeSvg from '../../assets/svg/sidebar/darkmode.svg'


const StyledNavBar = styled.div`
    background-color: var(--primary-color);
    width: 80px;
    height: 100vh;
`

const StyledNavSection = styled.nav`
    margin-top: 10vh;
    width: 100%;
    height: 300px;
    display: grid;
`

const NavBar = () => {
    return (
        <StyledNavBar>
            <StyledNavSection>
                <NavButton logoSvg={chatSvg} src='/chat'/>
                <NavButton logoSvg={accountSvg}/>
                <NavButton logoSvg={settingSvg}/>
                <NavButton logoSvg={darkmodeSvg}/>
            </StyledNavSection>
               
        </StyledNavBar>
    )
}

export default NavBar