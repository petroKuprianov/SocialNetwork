import React from 'react';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsers, setCurnetPageAC, setTotalUserCountAC, setIsFetchingAC } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import classes from './UsersContainer.module.css'


class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((responce) => {
            this.props.setUsers(responce.data.items);
            this.props.setUsersCount(responce.data.totalCount);
            this.props.setIsFetching(false);
        })
    }

    pageChanged = (page) => {
        this.props.setIsFetching(true);
        this.props.setCurnetPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((responce) => {
            this.props.setUsers(responce.data.items);
            this.props.setIsFetching(false);
        })
    }

    render = () => {
        
        return  <>
        {this.props.isFetching ? <div className={classes.lds_circle}></div>:<Users totalUserCount ={this.props.totalUserCount} 
            pageSize={this.props.pageSize} currentPage={this.props.currentPage}
            pageChanged = {this.pageChanged} users ={this.props.users}
            follow = {this.props.follow} unFollow={this.props.unFollow}/>}
        
            </>
    }

        
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{ dispatch(followAC(userId)) },

        unFollow: (userId) =>{ dispatch(unFollowAC(userId)) },

        setUsers: (users) =>{ dispatch(setUsers(users)) },  

        setCurnetPage: (currentPage) =>{ dispatch(setCurnetPageAC(currentPage))},

        setUsersCount: (totalCount) => { dispatch(setTotalUserCountAC(totalCount))},

        setIsFetching: (isFetching) => {dispatch(setIsFetchingAC(isFetching))} 

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(UsersApiContainer);

