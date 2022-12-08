import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Container/Login'
import Chat from './Container/Chat'
import Home from './Container/Home'


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
