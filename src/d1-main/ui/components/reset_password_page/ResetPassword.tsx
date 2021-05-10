import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './ResetPassword.module.css'
import {RoutePath} from "../../../../App";

export const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")

    const changePasswordValue = (value: string) => {
        setNewPassword(value)
    }

    const changeSecondPasswordValue = (value: string) => {
        setPassword2(value)
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>Reset Password</h1>
            <div>
                <input type={"password"}
                       className={s.input}
                       placeholder={"enter new password"}
                       value={newPassword}

                />
            </div>
            <div>
                <input type={"password"}
                       className={s.input}
                       placeholder={"confirm new password"}
                       value={password2}
                />
            </div>
            <div>
                <button className={s.btn}>Set new Password</button>
            </div>
            <NavLink to={RoutePath.LOGIN} className={s.link}>Sign In</NavLink>
        </div>
    );
};

