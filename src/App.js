import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderComponent from './Components/Header/HeaderContainer';




const App = (props) => {
  return (
    
    <div className="app-wrapper">
      <HeaderComponent />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render= {()=> <ProfileContainer store={props.store} /> } />
        <Route path="/dialogs" render = {() => <DialogsContainer store={props.store} /> } />
        <Route path="/users" render = {() => <UsersContainer store = {props.store} /> }/>
      </div>
    </div>
    

  );
}

export default App;
