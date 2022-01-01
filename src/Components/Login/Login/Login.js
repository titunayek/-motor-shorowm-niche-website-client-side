import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <Link to='/'><Button onClick={signInUsingGoogle}>Google Sign In</Button></Link>
    
            
        </div>
    );
};

export default Login;