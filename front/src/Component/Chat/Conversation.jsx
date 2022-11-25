import React from 'react'
import styled, { css } from 'styled-components'
import MessageInput from './MessageInput'
import SideCard from './SideCard'
import UserSearchbar from './UserSearchbar'

const StyledConversation = styled.div`
    width: calc(100% - 280px);
    bottom: 0;
`

const Conversation = () => {
    return (
        <StyledConversation>
            <MessageInput/>
        </StyledConversation>
    )
}

export default Conversation