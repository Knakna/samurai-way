import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './components/redux/state';
import {StateType} from './components/redux/state';

export let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );

}
