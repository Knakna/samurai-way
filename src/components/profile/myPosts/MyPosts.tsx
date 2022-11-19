import React from 'react';
import s from './MyPosts.module.scss'
import {PostType} from '../../redux/state';
import {Post} from './post/Post';


type MyPostsType = {
    posts: PostType[]
}


export function MyPosts(props: MyPostsType) {
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    /*export function MyPosts({ posts }: MyPostsType) {
        const postsElements = posts.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>)*/
    /*const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }*/
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                {/*<Post message='Hi' likesCount={0}/>*/}
                {/*<Post message='Post' likesCount={12}/>*/}
                {/*<input type="text" onChange={onChange}/>*/}
                {postsElements}
            </div>
        </div>
    );
}
