import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Enter Your Name" />
                    <br />
                    <input type="email" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" placeholder="Enter Your Password" />
                    <br />
                    <input
                        type="password"
                        placeholder="Re-Enter Your Password"
                    />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>
                    Already Have an account? <Link to="/login">Login now!</Link>
                </p>
                <div>-----------or-----------</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;
