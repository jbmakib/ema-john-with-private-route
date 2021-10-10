import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit={() => console.log("fjfkj")}>
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
                <button className="btn-regular" onClick={handleGoogleLogin}>
                    Google sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
