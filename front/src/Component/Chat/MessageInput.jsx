import React from 'react'
import styled, { css } from 'styled-components'

const StyledMessageInput = styled.input`
    width: 100%;
    height: 6vh;
    background-color: #273C57;
    border: none;
    color: lightgray;
    padding: 20px;
    outline: none;
    position: fixed;
    bottom: 0;
`

const MessageInput = () => {
    return (
        <>
        <StyledMessageInput placeholder='Enter text here..'/>
        </>
    )
}

export default MessageInput