import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import useFirebase from '../../Firebase/hook';
import "./Header.css";

const Header = () => {
    const {user , logout} = useAuth();
    return (
        <div className="navbar-style">
            <NavLink to="/home"> Home </NavLink>
            <NavLink to="/shop"> Shop </NavLink>
            <NavLink to="/place_order"> Place Order </NavLink>
            <NavLink to="/registration_page"> Registration  </NavLink>
            <NavLink to="/login"> Login </NavLink>
                <span> {user.displayName} </span>
            {user?.email && <button onClick={logout} > Log out </button> }
             
        </div>
    );
};

export default Header;