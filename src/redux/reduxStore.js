import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const { createStore, combineReducers } = require("redux");




let redusers = combineReducers(
    { 
        profilePage: profileReducer ,
        dialogPage : dialogReducer,
        usersPage:usersReducer,
        auth: authReducer
    }
);

let store = createStore(redusers);
window.store = store;

export default store;