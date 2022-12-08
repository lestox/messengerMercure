import React from 'react'
import {useEffect, useState} from "react"
import styled from 'styled-components'

const Container = styled.div`
    margin-top : 14vh;
    background-color: yellow;
    height: 40vh;
`;

const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through";
    text-color : black;
`;

const ChatMercure = () => {
    const [chatList, setChatList] = useState([]);

    const handleMessage = (e) => {
        let id = chatList.length + 1;
        let message = (JSON.parse(e.data));
        console.log(chatList)
        setChatList((prev) => [
            ...prev,
            {
                id: id,
                message: message['message'],
            }
        ]);
        console.log(chatList)
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