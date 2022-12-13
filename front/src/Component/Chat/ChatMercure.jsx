import React from 'react'
import {useEffect, useState} from "react"
import styled, { css } from 'styled-components'

const Container = styled.div`
    margin-top : 14vh;
    width: 70vw;
    bottom: 0;
    display: flex;
`;

const LIST = styled.li`
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin: 1rem;
    background: var(--primary-color);
    text-color: var(--dark-text-color);
    border-radius: 1.125rem 1.125rem 1.125rem 0;
    min-height: 2.25rem;
    width: fit-content;
    max-width: 66%;
    
    box-shadow: 
        0 0 2rem rgba(black, 0.075),
        0rem 1rem 1rem -1rem rgba(black, 0.1);
`;

const ChatMercure = () => {
    const [chatList, setChatList] = useState([]);

    const handleMessage = (e) => {
        let id = chatList.length + 1;
        let message = (JSON.parse(e.data));
        setChatList((prev) => [
            ...prev,
            {
                id: id,
                message: message['message'],
            }
        ]);
    }

    let eventSource;

    useEffect(() => {
        fetch('http://localhost:1234/auth', {
            method: 'GET',
            credentials: "include",
            mode: "cors"
        })
            .then(() => {
                const url = new URL('http://localhost:2345/.well-known/mercure');
                url.searchParams.append('topic', 'https://example.com/my-private-topic');
                eventSource = new EventSource(url, {withCredentials: true});

                eventSource.onmessage = handleMessage
            });

        if (eventSource !== undefined) {
            return () => {
                eventSource.close();
            };
        }
    }, []);

    return (
        <Container>
            <ul>
                {chatList.map((chat) => {
                    return (
                        <LIST
                            id={chat.id}
                            style={{
                                listStyle: "none",
                            }}
                        >
                            {chat.message}
                        </LIST>
                    );
                })}
            </ul>
        </Container>
    );
};

export default ChatMercure