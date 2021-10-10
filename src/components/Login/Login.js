import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
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
                <button className="btn-regular" onClick={signInUsingGoogle}>
                    Google sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
