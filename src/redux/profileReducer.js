const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initilaState= {
    
        PostsMessages: [
            { id: 1, message: "Hello", countLikes: 11, lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" },
            { id: 2, message: "How are you?", countLikes: 155, lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" },
            { id: 3, message: "Do you love beer?", countLikes: 45, lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" }
        ],
        newPostText: "",
        profile: null

};


const profileReducer = (state = initilaState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                countLikes: 0,
                lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
            };

            if (state.newPostText !== "") {
               return {
                    ...state,
                    PostsMessages:[newPost,...state.PostsMessages],
                    newPostText:""
                }
            }
            return state;
        }
        case UPDATE_POST_TEXT: {

            return {...state,
                newPostText:action.postText
            };
            
            
        }

        case SET_USER_PROFILE:{
                return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}


export const addPostActitionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, postText: text });


export const setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile});

export default profileReducer;