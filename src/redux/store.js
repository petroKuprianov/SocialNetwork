import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
    _state: {
        profilePage: {
            PostsMessages: [
                { id: 1, message: "Hello", countLikes: 11, lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" },
                { id: 2, message: "How are you?", countLikes: 155, lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" },
                { id: 3, message: "Do you love beer?", countLikes: 45, lin: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" }
            ],
            newPostText: ""
        },


        dialogPage: {
            dialogMessages: [
                { id: 1, message: "Hello" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Do you love beer?" },
                { id: 4, message: "I Love Beer!!" }],


            newMessagetext: "",

            dialogsMass: [
                { id: 1, name: "Petya", lin: "https://cdnimg.rg.ru/i/gallery/9c63b6ab/29_06a485ed.jpg" },
                { id: 2, name: "Vasya", lin: "https://www.sostav.ru/app/public/images/news/2015/12/18/Screenshot_2.jpg?rand=0.2807936074677855" },
                { id: 3, name: "Katya", lin: "https://www.sostav.ru/app/public/images/news/2015/12/18/Screenshot_2.jpg?rand=0.2807936074677855" },
                { id: 4, name: "Misha", lin: "https://www.sostav.ru/app/public/images/news/2015/12/18/Screenshot_2.jpg?rand=0.2807936074677855" },
                { id: 5, name: "Lena", lin: "https://cdnimg.rg.ru/i/gallery/9c63b6ab/29_06a485ed.jpg" }
            ]
        }
    },

    getState() {
        return this._state;
    },
    RenderTree(_state) {

    },
    subscribe(observer) {
        this.RenderTree = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this.RenderTree(this._state);

    }
};

export default store;

