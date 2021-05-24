import React from 'react';
import s from './Error.module.css'
import {RoutePath} from "../../../../App";
import errorImg from "../../../../d2-common/photos/pablo-956.png"
import {Route} from "../../../../d2-common/components/Route/Route";

export const Error = () => {
    return (
        <div className={s.wrapper}>
            <img src={errorImg} style={{"width": "60%", "height": "40%"}} alt={"try again later!"}/>
            <h4 className={s.text}>UH OH!You're lost.</h4>
            <p className={s.paragraph}>The page you are looking for does not exist. How you got here is a mystery. But you
                can click the button below to go back to the homepage.</p>
            <div className={s.container}>
                <Route to={RoutePath.HOME_PAGE} text={"Home"}/>
            </div>
        </div>
    );
};
