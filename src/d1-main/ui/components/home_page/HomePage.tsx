import React from 'react';
import s from './HomePage.module.css';
import brownСircle from './../../../../d2-common/photos/ellipse-brown-sm.png';
import redСircle from './../../../../d2-common/photos/ellipse-red-sm.png';

export const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <h1 className={s.title}>Welcome</h1>
                <img src={brownСircle} className={s.brownC} alt={"picture"}/>
                <img src={redСircle} className={s.redC} alt={"picture"}/>
            </div>
        </div>
    );
};
