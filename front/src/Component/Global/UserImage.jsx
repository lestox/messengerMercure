import React from 'react'
import styled, { css } from 'styled-components'

const StyledUserImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`

const UserImage = () => {
    return (
        <>
        <StyledUserImage src='https://assets-fr.imgfoot.com/media/cache/1200x1200/paul-pogba-4-2122-626002c304f47.jpg'/>
        </>
    )
}

export default UserImage