import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Login.module.css'
import {RoutePath} from "../../../../App";

export const Login = () => {
    return (
        <div>
          <h1>Login</h1>
            <div><input type={"text"}/></div>
            <div><input type={"password"}/></div>
            <div><input type={"checkbox"}/></div>
            <div><button>Sign In</button></div>
            <NavLink to={RoutePath.FORGOT_PASSWORD}>Forgot Password? </NavLink>
            <div><NavLink to={RoutePath.REGISTRATION}>Don't have an account?Sign Up </NavLink></div>
        </div>
    );
};
