const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let initialState = {
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
        { id: 5, name: "Lena", lin: "https://cdnimg.rg.ru/i/gallery/9c63b6ab/29_06a485ed.jpg" },
        { id: 5, name: "Dasha", lin: "https://cdnimg.rg.ru/i/gallery/9c63b6ab/29_06a485ed.jpg" },
        { id: 5, name: "Vasya", lin: "https://cdnimg.rg.ru/i/gallery/9c63b6ab/29_06a485ed.jpg" }
    ]
};

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessagetext
            };
            let statecopy
            if (state.newMessagetext !== '') {
                return {
                    ...state,
                    dialogMessages:[...state.dialogMessages,newMessage],
                    newMessagetext:""
                }
            }
            return state;
        }
        case UPDATE_MESSAGE: {
            return { ...state,
            newMessagetext:action.newMessage
            };
            
        }
        default:
            return state;
    }

}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewTextActionCreator = (text) =>
    ({ type: UPDATE_MESSAGE, newMessage: text });

export default dialogReducer;