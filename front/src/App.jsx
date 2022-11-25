import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Login from './Container/Login'
import Chat from './Container/Chat'
import Home from './Container/Home'
import Chat2 from './Container/Chat'


function App() {

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
