import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Component/Global/Button";
import styled from "styled-components";
import logo from "../assets/svg/global/full-size-logo.svg"

export default function Login() {
    const [username, setUsername] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
    }

    const StyledGlobal = styled.div`
    padding-top: 8vh;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`

    const StyledLoginCard = styled.div`
        margin-top: 30px;
        width: 400px;
        border-radius: 30px;
        background-color: var(--white-color);
        padding: 40px 70px;
        text-align: center;
        
      `

    const StyledLogo = styled.img`
      max-width: 150px;
    `

    const StyledRegisterLink = styled.a`
      display: block;
      font-size: 14px;
      line-height: 16px;
      color: var(--mid-text-color);
      text-decoration-line: underline;
    `

     const StyledInput = styled.input`
      border: 0px;
      border-bottom: 1px solid var(--mid-text-color);
      outline: none;
`





    return (
      <StyledGlobal>
        <StyledLogo src={logo}/>
        <StyledLoginCard>
            <h2>Login</h2>
            <>
              <label><b>Nom d'utilisateur</b></label>
              <StyledInput type="text" name="username" required/>

              <label><b>Mot de passe</b></label>
              <StyledInput type="password"  name="password" required/>
              <Button primary class='center'>Log In</Button>
            </>

            
            <StyledRegisterLink href="/register">Create account</StyledRegisterLink>
        </StyledLoginCard>
      </StyledGlobal>
    )
}