import React from 'react';
import { addPostActitionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
    return{
        Posts: state.profilePage.PostsMessages,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{

    return{
        updateNewPostText: (text) =>{dispatch(updateNewPostTextActionCreator(text)) },
        addPost: () => {dispatch(addPostActitionCreator()) }
    }
}




const MyPostContainer = connect(mapStateToProps,mapDispatchToProps) (MyPost);


export default MyPostContainer;