import s from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    id: number
    name: string
}


export function DialogItem(props: DialogItemType) {
    let path = '/dialogs/' + props.id

    return (
        <div>
            <NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}