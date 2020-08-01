import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsMessageItem from './DialogsMessageItem/DialogsMessageItem';


const Dialogs = (props) => {




    let dialogElements = props.Dialmass
        .map((dialog) => {
            return <DialogItem name={dialog.name} lin={dialog.lin} />
        });


    let dialogMessElements = props.DialMessag
        .map(messages => <DialogsMessageItem message={messages.message} />);

    let newMessage = React.createRef();

    let addMess = () => {

        props.addMess();
    }

    let updateMessText = () => {
        let text = newMessage.current.value;
        props.updateMessText(text);

    }



    return (

        <div className={classes.dialogs}>
            <div className={classes.dialog}>


                <p className={classes.dialog_Text} >Dialogs</p>
                {dialogElements}


            </div>
            <div className={classes.messages}>

                <p className={classes.dialog_Text} >Messages</p>
                <div className={classes.test}>
                    {dialogMessElements}
                </div>
                <div className={classes.textareaBlock}>
                    <textarea onChange={updateMessText} className={classes.textDecor}
                        value={props.newMessagetext} ref={newMessage} placeholder="Enter your message"></textarea>
                    <button className={classes.buttonStule} onClick={addMess}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs; 