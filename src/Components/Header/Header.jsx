import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (

        <header className={classes.header}>

            <img src="https://logomaster.ai/static/media/sample.c8bf2b04.svg" width="59" height="59" ></img>
            <div className={classes.loginBlock}>

                {props.isAuth ?<p>{props.login}</p> :<NavLink to='/login'>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;
