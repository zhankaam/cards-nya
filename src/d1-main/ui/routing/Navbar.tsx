import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutePath} from '../../../App';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                <NavLink to={RoutePath.HOME_PAGE} className={s.nav}>Home</NavLink>
            </div>
            <div  className={s.title}>
                <NavLink to={RoutePath.LOGIN} className={s.nav}>Log in</NavLink>
            </div>
            <div  className={s.title}>
                <NavLink to={RoutePath.REGISTRATION} className={s.nav}>Sign Up</NavLink>
            </div>
            <div  className={s.title}>
                <NavLink to={RoutePath.PROFILE} className={s.nav}>Profile</NavLink>
            </div>
            <div  className={s.title}>
                <NavLink to={RoutePath.FORGOT_PASSWORD} className={s.nav}>Forgot Password</NavLink>
            </div>
            <div  className={s.title}>
                <NavLink to={RoutePath.RESET_PASSWORD} className={s.nav}>Reset Password</NavLink>
            </div>
            <div  className={s.title}>
                <NavLink to={RoutePath.ERROR} className={s.nav}>Error </NavLink>
            </div>
            <div  className={s.title}>
                <button>Log Out </button>
            </div>
        </div>
    );
};
