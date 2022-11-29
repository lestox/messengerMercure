import React from 'react'
import styled, { css } from 'styled-components'

const StyledMessageInput = styled.textarea`
    //width: calc(100% - 60px);
    margin: 0 30px;
    height: 7vh;
    background-color: var(--white-color);
    border-radius: 20px;
    border: none;
    color: lightgray;
    padding: 20px;
    outline: none;
    overflow: hidden;
    resize: none;
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