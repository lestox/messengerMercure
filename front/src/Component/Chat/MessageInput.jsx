import React from 'react'
import styled, { css } from 'styled-components'
import {useEffect, useState} from "react"

const StyledMessageInput = styled.input`
    //width: calc(100% - 60px);
    margin: 0 30px;
    height: 7vh;
    background-color: var(--white-color);
    border-radius: 20px;
    width: calc(70vw - 60px);
    border: none;
    color: lightgray;
    padding: 20px;
    margin-bottom: 25px;
    outline: none;
    overflow: hidden;
    resize: none;
    position: fixed;
    bottom: 0;
`

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    position: fixed;
    bottom: 0;
`

const MessageInput = () => {
    const [input, setInput] = useState("");

    const handleClick = () => {
        const data  = new URLSearchParams({
                message: input
            })
        fetch('http://localhost:1234/mercure-publish', {
            method: 'POST',
            mode: "cors",
            credentials: "include",
            // body: {
            //     message: input
            // }
        })
            // .catch((error) => {
            //     console.error(error);
            // });
        setInput("")
    };
    return (
        <>
        <StyledMessageInput placeholder='Enter text here..' value={input} onInput={(e) =>setInput(e.target.value)}/>
            <StyledButton onClick={() => handleClick()}>
                Send
            </StyledButton>
        </>
    )
}

export default MessageInput