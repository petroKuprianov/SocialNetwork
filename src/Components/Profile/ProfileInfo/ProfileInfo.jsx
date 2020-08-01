import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
        <div>
            <img className={classes.content_img_first} src="https://mycanon.canon.ru/Upload/CKEditor/Masterskaya/Panoramnaya_semka/91371.jpg"></img>
            <div className={classes.discription}>
                <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" width="50" height="50"></img>
          description
        </div>
        </div>
    );
}

export default ProfileInfo;