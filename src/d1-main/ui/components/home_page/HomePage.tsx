import React from 'react';
import s from './HomePage.module.css';
import photo from './../../../../d2-common/photos/ellipse-brown-sm.png';

export const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <h1 className={s.title}>Welcome</h1>
                <img src={photo} className={s.image}/>
            </div>
        </div>
    );
};
