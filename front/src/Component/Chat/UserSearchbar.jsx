import React from 'react'
import styled, { css } from 'styled-components'
import SideCard from './SideCard'

const StyledUserSearchbar = styled.input`
    width: 100%;
    height: 6vh;
    background-color: transparent;
    border: none;
    color: lightgray;
    padding: 20px;
    outline: none;
    overflow: scroll;
`

const UserSearchbar = () => {
    return (
        <>
        <StyledUserSearchbar placeholder='Search an user..'/>
        </>
    )
}

export default UserSearchbar