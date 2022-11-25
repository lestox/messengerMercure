import {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Login from './Container/Login'
import Chat from './Container/Chat'
import Home from './Container/Home'
import Chat2 from './Container/Chat'


function App() {

    /*window.onload = function() {
        const url = new URL('http://localhost:2345/.well-known/mercure');
        url.searchParams.append('topic', 'https://example.com/my-private-topic');

        const eventSource = new EventSource(url);

        eventSource.onmessage = e => console.log(JSON.parse(e.data));
    }*/
    let eventSource;

    const handleMessage = (e) => {
        console.log(JSON.parse(e.data))
    }

    useEffect(() => {
        fetch('http://localhost:5173/auth', {
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

        return () => {
            eventSource.close();
        }
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element= {<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
