import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ResetPassword.module.css'
import {RoutePath} from "../../../../App";

export const ResetPassword = () => {
    return (
        <div className={s.container}>
        <h1 className={s.title}>Reset Password</h1>
            <div><input type={"password"} className={s.input} placeholder={"enter new password"}/></div>
            <div><input type={"password"} className={s.input} placeholder={"confirm new password"}/></div>
            <div><button className={s.btn}>Set new Password</button></div>
            <NavLink to={RoutePath.LOGIN} className={s.link}>Sign In</NavLink>
        </div>
    );
};

