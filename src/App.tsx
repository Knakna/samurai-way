import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {StateType} from './components/redux/state';

type AppType = {
    state: StateType
    addPost: (postMessage: string) => void
}


function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navbar names={props.state.navBar.names}/>
                <div className="app-wrapper-content">
                    <Switch>
                        {/*<Route path='/profile' component={Profile}/>*/}

                        <Route path='/profile'
                               render={() => <Profile
                                   state={props.state.profilePage}
                                   addPost={props.addPost}/>}/>
                        {/*<Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} profilePage={props.addPost}/>}/>*/}
                        <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
