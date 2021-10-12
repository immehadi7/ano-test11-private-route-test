import userEvent from '@testing-library/user-event';
import React from 'react';
import useAuth from '../../Context/useAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
                  <h1>This is home</h1>
                    <h3> user Name: {user.displayName} </h3>
        </div>
    );
};

export default Home;        