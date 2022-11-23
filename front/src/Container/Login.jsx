import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Component/Global/Button";

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

    return (
        <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
      
              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>
      
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                <form >
      
                  <h3 className="pb-3" >Log in</h3>
      
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
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image" className="w-100 vh-100" />
            </div>
          </div>
        </div>
      </section>
    )
}