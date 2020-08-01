import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';





const DialogItem = (props) => {
    
    return (
        <div className={classes.dialogItem}>
            <img className={classes.dialogItemImg} src ={props.lin} alt=""/>
            <NavLink activeClassName={classes.active} className={classes.dialogItemName} to={"/dialogs/"+ props.name}  > {props.name}</NavLink>
        </div>
    );
}


export default DialogItem;