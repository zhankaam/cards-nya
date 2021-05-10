import React, {ChangeEvent, useState} from 'react';
import s from './ForgotPassword.module.css'
import {RoutePath} from "../../../../App";
import {NavLink, Redirect} from 'react-router-dom';
import {useTypedSelector} from "../../../bll/store";
import {useDispatch} from 'react-redux';
import {forgotPasswordTC} from "../../../bll/reducers/forgotPass-reducer";
import {RequestStatusType} from "../../../bll/reducers/app-reducer";

export const ForgotPassword = () => {

    const [restorePass, setRestorePass] = useState<string>("")
    const isForgotPass = useTypedSelector<boolean>(state => state.forgotPass.isForgotPass)
    const status = useTypedSelector<RequestStatusType | null>(state => state.app.status)
    const dispatch = useDispatch()

    const onChangePassHandler = (e: ChangeEvent<HTMLInputElement>) => setRestorePass(e.currentTarget.value)
    const restorePassHandler = () => dispatch(forgotPasswordTC(restorePass))

    if (isForgotPass) {
        return <Redirect to={RoutePath.RESET_PASSWORD}/>
    }

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Forgot Password</h2>
            <div>
                <input type={"text"}
                       value={restorePass}
                       className={s.input}
                       placeholder={"enter your email address"}
                       onChange={onChangePassHandler}
                />
            </div>
            <div>
                <button className={s.btn} onClick={restorePassHandler}
                        disabled={status === "loading"}
                >Send email
                </button>
            </div>
            <NavLink to={RoutePath.LOGIN} className={s.link}>Sign In</NavLink>
        </div>
    );
};

