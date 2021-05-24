import React from 'react';
import s from './Title.module.css'

type PropsType = {
    text: string
}

export const Title: React.FC<PropsType> = (props) => {
    return <h1 className={s.title}>{props.text}</h1>
};
