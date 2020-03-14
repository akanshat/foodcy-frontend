import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({name, isLoggedIn}) => {
    return(
        <nav className="nav">
            <Link to='/dashboard'>
            <img className="logo" src={logo} alt='img'/>
            </Link>
            { isLoggedIn? 
             <Link to="/profile">
                <span className="accountpill">
                    {name}
                </span>
                </Link>
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