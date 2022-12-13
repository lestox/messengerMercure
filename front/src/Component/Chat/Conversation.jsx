import React from 'react'
import styled, { css } from 'styled-components'
import MessageInput from './MessageInput'
import ChatMercure from './ChatMercure'
import UpperBar from './UpperBar'

const StyledConversation = styled.div`
    width: 70vw;
    bottom: 0;
`

const Conversation = () => {
    return (
        <StyledConversation>
            <UpperBar/>
            <ChatMercure/>
            <MessageInput/>
        </StyledConversation>
    )
}

export default Conversation