import React from 'react';
import s from './Registration.module.css'
import {RoutePath} from "../../../../App";
import { NavLink } from 'react-router-dom';

export const Registration = () => {
    return (
        <div>
            <h1>Create your account</h1>
            <div><input type={"text"}/></div>
            <div><input type={"password"}/></div>
            <div><input type={"password"}/></div>
            <div><button>Sign Up</button></div>
            <NavLink to={RoutePath.LOGIN}>Log In</NavLink>
        </div>
    );
};

