const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}



const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {

                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }

                    return u;
                })
            };


        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USER_COUNT:{
            return {...state, totalUserCount: action.totalCount}
        }
        case IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default: {
            return state;
        }
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unFollowAC = (userId) => ({ type: UN_FOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurnetPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});

export const setTotalUserCountAC = (totalCount) =>({type:SET_TOTAL_USER_COUNT, totalCount});

export const setIsFetchingAC = (isFetching) =>({type:IS_FETCHING,isFetching});

export default usersReducer;