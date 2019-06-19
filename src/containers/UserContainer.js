import {connect} from 'react-redux'
import service from '../services/UserService'
import UserProfilePage from "../components/User/UserProfilePage";
import LoginPopup from "../components/LoginPopup";

const userService = service.getInstance();

const stateToPropertyMapper = state => ({
    users: state.userReducer.users,
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn,
})

const propertyToDispatchMapper = dispatch => ({
    findAllUsers: () => {
        userService.findAllUsers()
            .then(users => dispatch({
                type: "FIND_ALL_USERS",
                users: users
            }))
    },
    findUserById: (userId) => {
        userService.findUserById(userId)
            .then(user => dispatch({
                    type: "FIND_USER_BY_ID",
                    user: user
                })
            )
    },
    createUser: (user) =>
        userService.createUser(user)
            .then(user => dispatch({
                type: "CREATE_USER",
                user: user
            })),
    updateUser: (user) =>
        userService.updateUser(user)
            .then(user => dispatch({
                type: "UPDATE_USER",
                user: user
            })),
    logIn: (userName, password) => {
        userService
            .getUserByUserNameAndPassword(
                userName, password)
            .then(user => dispatch({
                type: "LOG_IN",
                user: user,
                loggedIn: true
            }))
    },
    logOut: () => {
        dispatch({
            type: "LOG_OUT",
        })
    },
    updateCurrentUser: (userId)=>{
        userService
            .findUserById(
                userId)
            .then(user => dispatch({
                type: "LOG_IN",
                user: user,
                loggedIn: true
            }))
    }
})

const UserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(UserProfilePage)

const LoggedInUserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(LoginPopup)

export {LoggedInUserContainer, UserContainer}
