import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';


export function Navbar() {
    return (
        <nav className={s.navbar}>
            <ul>
                <li><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to='/news' activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}