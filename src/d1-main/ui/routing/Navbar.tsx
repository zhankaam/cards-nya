import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutePath} from "../../../App";

export const Navbar = () => {
    return (
        <div>
            <div>
                <NavLink to={RoutePath.HOME_PAGE}>Home</NavLink>
            </div>
            <div>
                <NavLink to={RoutePath.LOGIN}>Log in</NavLink>
            </div>
            <div>
                <NavLink to={RoutePath.REGISTRATION}>Sign Up</NavLink>
            </div>
            <div>
                <NavLink to={RoutePath.PROFILE}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={RoutePath.FORGOT_PASSWORD}>Forgot Password</NavLink>
            </div>
            <div>
                <NavLink to={RoutePath.RESET_PASSWORD}>Reset Password</NavLink>
            </div>
            <div>
                <NavLink to={RoutePath.ERROR}>Error </NavLink>
            </div>
        </div>
    );
};
