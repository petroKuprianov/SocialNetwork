import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile"  activeClassName={` ${classes.active} ${classes.item_a}`} >Profile</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName= {` ${classes.active} ${classes.item_a}`} >Messages </NavLink>
            </div>


            <div className={classes.item}>
                <NavLink to="/news" activeClassName= {` ${classes.active} ${classes.item_a}`} >News </NavLink>
            </div>


            <div className={classes.item}>
                <NavLink to="/music" activeClassName= {` ${classes.active} ${classes.item_a}`} >Music </NavLink>
            </div>


            <div className={classes.item}>
                <NavLink to="/settings" activeClassName= {` ${classes.active} ${classes.item_a}`} >Settings </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={`${classes.active} ${classes.item_a}`}>Users</NavLink>
            </div>


        </nav>
    );
}

export default Nav;