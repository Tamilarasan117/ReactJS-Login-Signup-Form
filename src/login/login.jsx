import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Logo from "./logo.svg";
import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="loginCont">
            <div className="loginCard">
                <div className='logoCard'>
                    <img src={Logo} className="appLogo" alt="logo" />
                </div>
                <h3 className='loginHead'>Login</h3>
                <form className='loginForm'>
                    <div className="loginFormCard">
                        <label htmlFor="email mb-1">Email: </label>
                        <input type="email" id="email" className="form-control mb-3" name="email" autoComplete="on" placeholder="enter your Email" />
                        <label htmlFor="Password mb-1">Password: </label>
                        <input type="password" id="password" className="form-control mb-3" name="password" autoComplete="on" placeholder="enter your Password" />
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="signUpBut">
                    <span>Don't have Account?</span>
                    <Link to="/" type="submit" className="link">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};
export default Login;