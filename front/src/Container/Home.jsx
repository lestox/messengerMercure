import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";



export default function Home(){
    return (
        <div>
        <h1>Welcome to this awesome chat app</h1>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/chat">Chat</a></li>
        </ul>
        </div>
    )
}