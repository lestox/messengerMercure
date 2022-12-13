import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Container/Login'
import Chat from './Container/Chat'
import Home from './Container/Home'
import Register from './Container/Register'
import {useEffect} from "react";


function App() {
    let eventSource;

    const handleMessage = (e) => {
        console.log(JSON.parse(e.data))
    }

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element= {<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
