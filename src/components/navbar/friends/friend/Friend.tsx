import React from 'react';
import s from './Friend.module.scss'

type FriendType = {
    name: string
}

export function Friend(props:FriendType) {
    return (
        <li className={s.friend}>{props.name}</li>

    );
}