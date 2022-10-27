import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './post/Post';


export function MyPosts() {
    return (
        <div className={s.myPosts}>
            My posts
            <div>New post</div>
            <div>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}