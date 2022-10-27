import React from 'react';
import s from './Navbar.module.scss'


export function Navbar() {
    return (
        <nav className={s.navbar}>
            <ul>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    );
}