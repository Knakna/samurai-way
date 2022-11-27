import {rerenderEntireTree} from '../../render';

export type NameType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type NavBar = {
    names: NameType[]
}

export type ProfilePage = {
    posts: PostType[]
}

export type DialogsPage = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export  type StateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
    navBar: NavBar
}


const state = {
    navBar: {
        names: [
            {id: 1, name: 'Olia'},
            {id: 2, name: 'Lena'},
            {id: 3, name: 'Max'},

        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Post1', likesCount: 12},
            {id: 2, message: 'Post2', likesCount: 0},
            {id: 3, message: 'Post3', likesCount: 2},
            {id: 4, message: 'Post4', likesCount: 1},
            {id: 5, message: 'Post5', likesCount: 120},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Olia'},
            {id: 2, name: 'Lena'},
            {id: 3, name: 'Max'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Nelly'},
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Max'},
            {id: 4, message: 'Alex'},
            {id: 5, message: 'Nelly'},
        ]

    }

}

// export type AddPostType = {
//     addPost: (postMessage:string) =>void
// }

export const addPost = (postMessage:string) => {
    const newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
console.log(state.profilePage.posts)


export default state;
