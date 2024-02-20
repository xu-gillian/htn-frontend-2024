import React, { useContext, useState } from "react";
import "../../assets/css/AuthPage.css";
import { Link, Navigate } from "react-router-dom";
import axios from "../../api/axios";
import { useLoginState } from "../../context/loginState-context";

// login form
const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { loginState, setLoginState } = useLoginState();

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        // sends request to login user 
        try {
            const response = await axios.post(
                `/auth`,
                JSON.stringify({ user: email, pwd: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data))
            setEmail('');
            setPassword('');
            setLoginState(true);
        } catch (err) {
            // an error code will be returned
            if (err instanceof Error) {
                if (err.message.includes('400')) {
                    setError('Please provide an email and password.');
                } else if (err.message.includes('401')) {
                    setError('This username does not exist.');
                } else if (err.message.includes('500')) {
                    setError('Server error. Please try again.')
                }
            }
        }
    }

    return (
        <div className="login-wrapper">
            <div className="split left"></div>
            <div className="split right">
                <div className="auth-container">
                    <h1 className="auth-title">Sign In</h1>
                    <form className="login-form" onSubmit={loginHandler}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="auth-button" type="submit">Login{loginState ? <Navigate to="/"></Navigate> : <></>}</button>
                        <Link className="login-redirect" to={"/register"}>Don't have an account?</Link>
                        <Link className="login-redirect" to={"/"}>Home</Link>
                        {(error != '' ? <div className="error">{error}</div> : <div></div>)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;