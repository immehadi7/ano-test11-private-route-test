import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import useFirebase from '../../Firebase/hook';

const Login = () => {
    let {signInUsingGoogle} = useAuth();
    return (
      
        <div>
            <h1>This is login page</h1>
            
            <button onClick={signInUsingGoogle} >Google sign in</button>

           <Link to='/registration_page'>   <button> New ? Registration here </button></Link>
        </div>
    );
};

export default Login;