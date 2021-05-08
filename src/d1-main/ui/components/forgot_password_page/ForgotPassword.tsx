import React from 'react';
import s from './ForgotPassword.module.css'
import {RoutePath} from "../../../../App";
import { NavLink } from 'react-router-dom';

export const ForgotPassword = () => {
    return (
        <div className={s.wrapper}>
              <h2 className={s.title}>Forgot Password</h2>
            <div><input type={"text"} className={s.input} placeholder={"enter your email address"} /></div>
            <div><button className={s.btn}>Send email</button></div>
            <NavLink to={RoutePath.LOGIN} className={s.link}>Sign In</NavLink>
        </div>
    );
};

