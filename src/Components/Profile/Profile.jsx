import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './Posts/MyPostContainer';

const Profile = (props) => {

   

    return (
        <div className={classes.main}>
            <ProfileInfo profile={props.profile} />
            <MyPostContainer store={props.store} />
        </div>
    );
}

export default Profile;