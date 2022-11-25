import Button from "../Component/Global/Button";
import styled from "styled-components";

const ContainerStyle = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 15vh;
    text-align: center;
`

export default function Home(){
    return (
        <ContainerStyle>
        <h1>Welcome to this awesome chatting app 👋</h1>
        <div>
            <a href="/login"><Button primary>Login</Button></a>
            <a href="/chat"><Button primary>Chat</Button></a>
        </div>
        </ContainerStyle>
    )
}