import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './post/Post';


export function MyPosts() {

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message='Hi' likesCount={0}/>
                <Post message='Post' likesCount={12}/>
            </div>
        </div>
    );
}