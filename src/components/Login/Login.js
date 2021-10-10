import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john? <Link to="/register">Create Account</Link>
                </p>
                <div>-----------or-----------</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;
