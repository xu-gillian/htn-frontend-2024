import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "../../api/axios";

const RegistrationPage: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const registerHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                '/register',
                JSON.stringify({ firstName: firstName, lastName: lastName, user: email, pwd: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(response?.data);
            console.log(response?.data.results);

            setFirstName('');
            setLastName('');
            setPassword('');
            setEmail('');
            setError('');
            setSuccess(true);
        } catch (err) {
            if (err instanceof Error) {
                if ((err.message).includes('400')) {
                    setError('Please provide an email and password.');
                } else if ((err.message).includes('409')) {
                    setError('This email already exists');
                } else if ((err.message).includes('500')) {
                    setError('Server error. Please try again.');
                }
            }
            setSuccess(false);
        }

    }

    return (
        <div className="login-wrapper">
            <div className="split left"></div>
            <div className="split right">
                <div className="auth-container">
                    <h1 className="auth-title">Sign Up</h1>
                    <form onSubmit={registerHandler}>
                        <input
                            className="input"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />

                        <input
                            className="input"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />

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

                        <button className="auth-button" type="submit">Register{success ? <Navigate to="/login"></Navigate> : <></>}</button>
                        <Link className="login-redirect" to={"/login"}>Already have an account?</Link>
                        <Link className="login-redirect" to={"/"}>Home</Link>
                        {(error != '' ? <div className="error">{error}</div> : <div></div>)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
