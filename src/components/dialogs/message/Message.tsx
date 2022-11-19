import s from '../Dialogs.module.scss';
import React from 'react';


type MessageType = {
    message: string
}


export function Message(props: MessageType) {

    return (
        <div className={s.message}>{props.message}</div>
    )
}