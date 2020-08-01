import React from 'react';
import classes from './DialogsMessageItem.module.css';


const DialogsMessageItem = (props) => {
    return (
        <div className={classes.messageItem}>
            {props.message}
        </div>

    );
}

export default DialogsMessageItem;