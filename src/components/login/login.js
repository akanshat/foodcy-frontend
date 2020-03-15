import React, { useState } from 'react';
import './login.css';
import { useAuth } from '../../contexts/auth';
import { Link, Redirect } from 'react-router-dom';
import config from '../../config';

const Login = () => {
    const [inputs, setInputs] = useState({ email: "", password: "" });

    const [loading, setLoading] = useState(false);


    const { backendURL } = config;
    const { token, setToken } = useAuth();

    if (token)
        return <Redirect to="/dashboard" />;

    const handleSubmit = async () => {
        setLoading(true);
        const { token: fetchToken } = await fetch(`${backendURL}/api/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        })
            .then(response => response.json());
        setLoading(false);
        localStorage.setItem("token", fetchToken);
        setToken(fetchToken);

    }

    const handleInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,

        });
    }

    return (
        <div className="overlay">
            <div className="form-container">
                {loading
                ? 
                    <h1>loading...</h1>
                :
                    <>
                        <input className="text-input" type="email" name="email" placeholder="Email" value={inputs.email} onChange={handleInput} />

                        <input className="text-input" type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleInput} />

                        <button onClick={handleSubmit} className="submit" type="submit">Login</button>
                        <p>Don't have an account yet? <Link to='/register'>Register</Link></p>
                    </>
                }

            </div>
        </div>
    );
}

export default Login;