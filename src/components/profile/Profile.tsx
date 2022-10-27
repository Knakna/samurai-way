import React from 'react';
import s from './Profile.module.scss'
import {MyPosts} from './myPosts/MyPosts';


export function Profile() {
    return (
        <div className={s.profile}>
            <main>
                <div><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KucPJ3qENfZS4SEG39RVhinojL2PpE8OiA&usqp=CAU"
                    alt="image"/></div>
                <div>ava desc</div>
                <div>
                    <MyPosts/>
                </div>

            </main>
        </div>
    );
}