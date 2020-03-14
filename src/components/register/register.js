import React from 'react';
import '../login/login.css';
import {Link} from 'react-router-dom';
const Register = () =>{
    return(
        <div className="overlay">
            <div className="form-container">
            <input className="text-input" type="text" name="name" placeholder="Name"/>

                    <input className="text-input" type="email" name="email"  placeholder="Email"/>
                
               
                    <input className="text-input" type="password" name="password" placeholder="Password"/>

                <button className="submit" type="submit">register</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
}

export default Register;