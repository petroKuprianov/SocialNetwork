import React from 'react'
import userPhoto from "../../Img/user.png"
import classes from './Users.module.css'

let Users = (props) =>{

    let pagesCount = props.totalUserCount / props.pageSize;

        let pages = [];

        for (let i = 1; i <= Math.ceil(pagesCount); i++) {
            pages.push(i);
        }

    return <div>
    {pages.map((page) => {
        return <span onClick={(e) => {props.pageChanged(page) }} className={props.currentPage === page ? classes.selected : classes.notSelected}>  {page}  </span>
    })}
    {
        props.users.map((us) => <div className={classes.main} key={us.id}>
            <div className={classes.mainInfo}>
                <div>
                    <img className={classes.imgPhoto} src={us.photos.small != null ? us.photos.small : userPhoto} />
                </div>
                <div>

                    {us.followed ? <button className={classes.buttonStule} onClick={() => {props.unFollow(us.id) }}> Unfollow</button>
                        : <button className={classes.buttonStule} onClick={() => { props.follow(us.id) }}> Follow</button>}

                </div>
            </div>

            <div className={classes.secondInfo}>
                <div className={classes.infoUser}>
                    <div className={classes.infoUser_Name}>
                        <div>{us.name}</div>
                        <div>{us.status}</div>
                    </div>
                </div>
                <div className={classes.cityInfo} >
                    <div>
                        {"us.locasion.city"}
                    </div>
                    <div>
                        {"us.locasion.country"}
                    </div>
                </div>
            </div>
        </div>)
    }
</div>
}

export default Users;