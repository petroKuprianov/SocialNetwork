import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/PreLoader";


const ProfileInfo = (props) => {

    if (!props.profile) {

        return < Preloader />
    }

    // let contactMass = props.profile.contacts.map( lu => {
    //     return <li> {lu==null ? null : lu} </li>
    // })

    let contactMass = Object.keys(props.profile.contacts);

    let mass = contactMass.map((list) =>{
        return props.profile.contacts[list] ? <li>{props.profile.contacts[list]}</li> : null
    })

    return (
        <div>
            <img className={classes.content_img_first} src="https://mycanon.canon.ru/Upload/CKEditor/Masterskaya/Panoramnaya_semka/91371.jpg"></img>
            <div className={classes.discription}>
                {props.profile.fullName}
                <img src={props.profile.photos.small}></img>
                {props.profile.aboutMe}
                <div>
                    Social media:
                    <ul>
                        {mass}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;