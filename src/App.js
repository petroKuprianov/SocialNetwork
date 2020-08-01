import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';




const App = (props) => {
  return (
    
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile" render= {()=> <Profile store={props.store} /> } />
        {/* <Route path = "" render = {()=><Profile store = {props.store}/> }/> */}
        <Route path="/dialogs" render = {() => <DialogsContainer store={props.store} /> } />
        <Route path="/users" render = {() => <UsersContainer store = {props.store} /> }/>
      </div>
    </div>
    

  );
}

export default App;
