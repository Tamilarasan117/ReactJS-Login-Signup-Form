import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Logo from "./logo.svg";
import React from "react";
import "./signup.css";

const Signup = () => {
    return (
        <div className="signUpCont">
            <div className="signUpCard">
                <div className="logoCard">
                    <img src={Logo} className="appLogo" alt="logo" />
                </div>
                <h3 className="signHead">Sign Up</h3>
                <form className="signUpForm">
                    <div className="signUpFormCard">
                        <label htmlFor="name" className="mb-1">Name:</label>
                        <input type="text" id="name" className="form-control mb-3" name="name" autoComplete="on" placeholder="Enter your name" />
                        <label htmlFor="email" className="mb-1">Email:</label>
                        <input type="email" id="email" className="form-control mb-3" name="email" autoComplete="on" placeholder="Enter your Email" />
                        <label htmlFor="Password" className="mb-1">Password:</label>
                        <input type="password" id="password" className="form-control mb-3" name="password" autoComplete="on" placeholder="Enter Password" />
                        <button type="submit" class="btn btn-primary mb-3"> Sign Up </button>
                    </div>
                </form>
                <div className="loginButCard">
                    <span>Already have an Account? </span>
                    <Link to="/login" type="submit" className="link">Login</Link>
                </div>
            </div>
        </div>
    );
};
export default Signup;