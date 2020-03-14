import React from 'react';
import './login.css';
import {Link} from 'react-router-dom'; 

const Login = () =>{
    return(
        <div className="overlay">
            <div className="form-container">
                    <input className="text-input" type="email" name="email"  placeholder="Email"/>
                
               
                    <input className="text-input" type="password" name="password" placeholder="Password"/>

                <button className="submit" type="submit">Login</button>
                <p>Don't have an account yet? <Link to='/register'>Register</Link></p>
            
            </div>
        </div>
    );
}

export default Login;