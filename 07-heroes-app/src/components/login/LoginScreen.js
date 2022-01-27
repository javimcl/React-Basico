import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('marvel',{
            replace: true
        });

    }

    return (
        <div className='container mt-5'>
            <h1>Hola Login screeen</h1>
            <hr />
            <button 
            onClick={handleLogin}
            className='btn btn-primary'>
                Login
            </button>
        </div>
    );
};
