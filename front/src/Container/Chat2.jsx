import {useState} from "react";
import '../assets/css/chat.css';
import {useLocation, useNavigate} from "react-router-dom";
import SideBar from "../Component/Chat/SideBar";

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

    return (
        <>
        <SideBar></SideBar>
        </>
      
    )
}

