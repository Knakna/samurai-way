import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogsPage} from '../redux/state';


type DialogsType = {
    dialogsPage: DialogsPage
}


export function Dialogs(props: DialogsType) {


    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={'Olia'} id={1}/>*/}
                {/*<DialogItem name={'Lena'} id={2}/>*/}
                {/*<DialogItem name={'Max'} id={3}/>*/}
                {/*<DialogItem name={'Alex'} id={4}/>*/}
                {/*<DialogItem name={'Nelly'} id={5}/>*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*<Message message={'Hi'}/>*/}
                {/*<Message message={'Hello'}/>*/}
                {/*<Message message={'Yo'}/>*/}
                {messagesElements}
            </div>
        </div>
    );
}