import React, { useState } from "react";
import "../../assets/css/LoginPage.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                './auth',
                JSON.stringify({ user: email, pwd: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data))
            setEmail('');
            setPassword('');
        } catch (err) {
            if (err instanceof Error) console.log(err.message);
        }
    }

    return (
        <div className="login-wrapper">
            <form onSubmit={loginHandler}>
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;