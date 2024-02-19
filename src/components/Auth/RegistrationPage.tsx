import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const RegistrationPage: React.FC = () => {
    // const paperStlye = {
    //     padding: 20, height: '70vh', width: 280, margin: "20px auto", "border-radius": "2%"
    // }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        } catch (err) {
            if (err instanceof Error) console.log(err.message);
        }

    }

    return (
        <div className="login-wrapper">
            <form onSubmit={registerHandler}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />

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

                <button type="submit">Register</button>
            </form>



            {/* <ThemeProvider theme={theme}> */}
            {/* <Paper elevation={10} style={paperStlye}> */}
            {/* <Grid>
                    Login
                </Grid> */}
            {/* <TextField id="standard-basic" label="First Name" placeholder="Enter First Name" fullWidth required />
                <TextField id="standard-basic" label="Last Name" placeholder="Enter Last Name" fullWidth required />
                <TextField id="standard-basic" label="Email" placeholder="Enter Email" fullWidth required />
                <TextField color="secondary" inputProps={{ style: { color: "white" } }} id="standard-basic" label="Password" placeholder="Enter Password" fullWidth required />
                <Link to="/">Register</Link> */}
            {/* </Paper> */}
            {/* </ThemeProvider> */}
        </div>
    );
}

export default RegistrationPage;
