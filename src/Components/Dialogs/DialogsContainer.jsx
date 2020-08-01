import React from 'react';
import { addMessageActionCreator, updateNewTextActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        Dialmass: state.dialogPage.dialogsMass,
        DialMessag: state.dialogPage.dialogMessages,
        newMessagetext: state.dialogPage.newMessagetext
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessText: (text) =>{ dispatch(updateNewTextActionCreator(text)) },
        addMess: () => {dispatch(addMessageActionCreator()) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;