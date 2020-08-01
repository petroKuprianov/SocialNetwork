import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src={props.lin} />
            <div className={classes.messageItem}> {props.message}</ div>
            <div>
                <div className={classes.likes}>{props.countLikes}</div>
            </div>
        </div>


    );
}

export default Post;