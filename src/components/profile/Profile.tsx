import React from 'react';
import s from './Profile.module.scss'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfilePage} from '../redux/state';


type ProfileType = {
    state: ProfilePage
    addPost: (postMessage: string) => void
}

export function Profile(props: ProfileType) {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts} addPost={props.addPost}/>
            </div>
        </div>
    );
}