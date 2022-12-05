import {useState} from "react";
import '../assets/css/chat.css';
import {useLocation, useNavigate} from "react-router-dom";
import NavBar from "../Component/Global/NavBar";
import ConvSideBar from "../Component/Chat/ConvSideBar";
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

    const StyledGlobalContainer = styled.div`
        display: flex;
    `

    return (
        <StyledGlobalContainer>
            <NavBar/>
            <ConvSideBar/>
            <Conversation/>
        </StyledGlobalContainer>
      
    )
}

