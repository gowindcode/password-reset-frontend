import React, { useState } from 'react';
import logo from '../Assets/smile.png';
import {  useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className='navbar' >
            <div className='navbar-inner'>
             <div className='navbar-logo'>
                <img src={logo} alt="logo" />
             </div>
             <div>
             <button onClick={() => handleNavigation('/signup')}>Signup</button>
             <button onClick={() => handleNavigation('/login')}>Login</button>
             <button onClick={() => handleNavigation('/signout')}>Signout</button>
             </div>
            </div>

        </div>
    );
};

export default NavBar;