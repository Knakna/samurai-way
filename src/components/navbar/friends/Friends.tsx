import React from 'react';
import s from './Friends.module.scss'
import {Friend} from './friend/Friend';
import {NameType} from '../../redux/state';

type FriendsType = {
    names: NameType[]
}


export function Friends(props: FriendsType) {
    const namesElement = props.names.map(n => <Friend key={n.id} name={n.name}/>)

    return (

        <div className={s.friends}>
            <h2 className={s.title}>Friends</h2>
            <ul className={s.wrap}>
                {namesElement}
            </ul>
        </div>
    );
}