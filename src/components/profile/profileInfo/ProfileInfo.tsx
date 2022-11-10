import s from './ProfileInfo.module.scss';
import React from 'react';

export function ProfileInfo() {
    return (
        <div>
            <div className={s.wrapImg}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KucPJ3qENfZS4SEG39RVhinojL2PpE8OiA&usqp=CAU"
                    alt="image"/>
            </div>
            <div className={s.descBlock}>
                ava desc
            </div>
        </div>

    )
        ;
}