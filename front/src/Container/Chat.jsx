import {useState} from "react";
import '../assets/css/chat.css';
import {useLocation, useNavigate} from "react-router-dom";
import SideBar from "../Component/Chat/SideBar";
import Conversation from "../Component/Chat/Conversation";
import styled from "styled-components";

export default function Chat() {
    const [username, setUsername] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
    }

    const StyledBody = styled.body`
        display: flex;
    `

    return (
        <StyledBody>
        <SideBar></SideBar>
        <Conversation></Conversation>
        </StyledBody>
      
    )
}

