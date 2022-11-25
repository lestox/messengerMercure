import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Component/Global/Button";
import styled from "styled-components";

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

    const StyledLoginCard = styled.div`
        min-width: 450px;
        display: flex;
        justify-content: center;
        padding-top: 16vh;
      `


    return (
        <section className="vh-100">
        <StyledLoginCard className="container-fluid">
          <div>
            <div>
      
              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
              </div>
      
              <div>
      
                <form >
      
                  <h3 className="mb-2">Login</h3>
      
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example18" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                  </div>
      
                  <div className="form-outline mb-2">
                    <input type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>
      
                  <div className="mb-4">
                    <Button primary>Login</Button>
                  </div>
      
                  
                </form>
      
              </div>
      
            </div>
          </div>
        </StyledLoginCard>
      </section>
    )
}