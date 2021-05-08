import React from 'react';
import s from './ForgotPassword.module.css'

export const ForgotPassword = () => {
    return (
        <div className={s.wrapper}>
              <h2 className={s.title}>Forgot Password</h2>
            <div><input type={"text"} className={s.input} placeholder={"please enter email address"} /></div>
            <div><button className={s.btn}>Send email</button></div>
        </div>
    );
};

