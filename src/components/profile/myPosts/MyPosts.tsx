import React from 'react';
import s from './MyPosts.module.scss'
import {PostType} from '../../redux/state';
import {Post} from './post/Post';
import {log} from 'util';


type MyPostsType = {
    posts: PostType[]
}
type NewPostElement = {
    text: string
}


export function MyPosts(props: MyPostsType) {
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value
        //проверка на наличие ссылки или if или ?

        console.log(text)
    }
    /*export function MyPosts({ posts }: MyPostsType) {
        const postsElements = posts.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>)*/
    /*const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }*/
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button
                    onClick={addPost}
                >Add post
                </button>
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
