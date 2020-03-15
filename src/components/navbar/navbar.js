import React from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/auth';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ name }) => {
    const { token, logMeOut } = useAuth();


    return (
        <nav className="nav">
            <Link to='/dashboard'>
                <img className="logo" src={logo} alt='img' />
            </Link>
            {token ?
                    <button className="accountpill" onClick={logMeOut}>
                        LOGOUT
                    </button>
                :
                <Link to="/login">
                    <span className="accountpill">
                        Login
                </span>
                </Link>
            }
        </nav>
    );

}


export default Navbar;