import React from 'react'
import styled, { css } from 'styled-components'
import {useState} from "react"

const StyledMessageInput = styled.input`
    //width: calc(100% - 60px);
    display: flex;
    align-items: right;
    justify-content: right;
    margin: 0px 20px;
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
    position: fixed;
    bottom: 0;
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 6px;
    color: var(--primary-color);
    background-color: --secondary-color: #F4F5F7;
    border-color: var(--mid-text-color);
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
    :hover {
        color: #ffffff;
        background-color: #0366d6;
        border-color: #1b1f2326;
        box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
        transition-duration: 0.1s;
    }
                
`

const MessageInput = () => {
    const [input, setInput] = useState("");

    const handleClick = () => {
        console.log(input)
        const data  = {
                'message': input
            }
        console.log(JSON.stringify(data))
        fetch('http://localhost:1234/mercure-publish', {
            method: 'POST',
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(data)
        })
            .catch((error) => {
                console.error(error);
            });
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