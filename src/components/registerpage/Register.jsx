import React from "react";
import "./register.css";
function Register() {
    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" placeholder="Your Name"></input>
            <input type="text" placeholder="Your Email"></input>
            <input type="password" placeholder="Your Password"></input>
            <input type="password" placeholder="Re-enter Password "></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    );
}

export default Register;
