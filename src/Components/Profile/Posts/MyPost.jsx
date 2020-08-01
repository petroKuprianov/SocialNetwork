import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';
import { addPostActitionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';



const MyPost = (props) => {

    let PostsElement = props.Posts
        .map(postMess => <Post message={postMess.message} countLikes={postMess.countLikes} lin={postMess.lin} />);



    let newPostElement = React.createRef();

    let funcOnClick = () => {
        // props.dispatch(addPostActitionCreator());
        props.addPost();

    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.main}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} placeholder="How are you?" />
                </div>
                <div>
                    <button onClick={funcOnClick}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {PostsElement}
            </div>
        </div>

    );
}

export default MyPost;