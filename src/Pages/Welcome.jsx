import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate()
    const welcomeToSignupClick = () => {
        navigate('/signup');
    }
    return (
        <div className='welcome-page'>
            <h1>Welcome to password reset portal page</h1>
            <button onClick={welcomeToSignupClick}>Signup</button>
        </div>
    );
};

export default Welcome;