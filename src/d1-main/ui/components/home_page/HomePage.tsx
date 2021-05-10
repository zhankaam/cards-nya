import React from 'react';
import s from './HomePage.module.css';
import brownСircle from './../../../../d2-common/photos/ellipse-brown-sm.png';
import redСircle from './../../../../d2-common/photos/ellipse-red-sm.png';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from "../../../bll/store";
import {RequestStatusType} from "../../../bll/reducers/app-reducer";
import {Redirect} from 'react-router-dom';
import {RoutePath} from "../../../../App";
import {logOutTC} from "../../../bll/reducers/login-reducer";

export const HomePage = () => {


    const isAuth = useTypedSelector<boolean>(state => state.login.isAuth);
    const status = useTypedSelector<RequestStatusType | null>(state => state.app.status)
    const dispatch = useDispatch();

    if (!isAuth) {
        return <Redirect to={RoutePath.LOGIN}/>
    }

    const logoutHandler = () => dispatch(logOutTC())

    return (
        <div className={s.wrapper}>
            <div>
                <h1 className={s.title}>Welcome to profile</h1>
                <img src={brownСircle} className={s.brownC} alt={"picture"}/>
                <img src={redСircle} className={s.redC} alt={"picture"}/>
            </div>
            <button disabled={status === "loading"} onClick={logoutHandler} className={s.btn}>Log out</button>
        </div>
    );
};
