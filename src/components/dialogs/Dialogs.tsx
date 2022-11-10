import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';



export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Olia'} id={1}/>
                <DialogItem name={'Lena'} id={2}/>
                <DialogItem name={'Max'} id={3}/>
                <DialogItem name={'Alex'} id={4}/>
                <DialogItem name={'Nelly'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
}