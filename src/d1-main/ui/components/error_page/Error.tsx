import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Error.module.css'
import {RoutePath} from "../../../../App";
import errorImg from "../../../../d2-common/photos/pablo-956.png"

export const Error = () => {
    return (
        <div className={s.wrapper}>
            {/*<h1 className={s.title}>404</h1>*/}
            <img src={errorImg} style={{"width": "60%", "height": "40%"}} alt={"try again later!"}/>
            <h4 className={s.text}>UH OH!You're lost.</h4>
            <p className={s.paragraph}>The page you are looking for does not exist. How you got here is a mystery. But you
                can click the button below to go back to the homepage.</p>
            <div className={s.container}><NavLink to={RoutePath.HOME_PAGE} className={s.link}>Home</NavLink></div>
        </div>
    );
};
