import React from 'react';
import s from './Profile.module.scss'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';


export function Profile() {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    );
}