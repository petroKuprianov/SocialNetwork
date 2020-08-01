import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";

const { createStore, combineReducers } = require("redux");




let redusers = combineReducers(
    { 
        profilePage: profileReducer ,
        dialogPage : dialogReducer,
        usersPage:usersReducer
    }
);

let store = createStore(redusers);
window.store = store;

export default store;