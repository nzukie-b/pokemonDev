import {connect} from 'react-redux'
import service from '../services/UserService'
import LoginPopup from "../components/LoginPopup";

const userService = service.getInstance()
const stateToPropertyMapper = state => ({
    currentlyLoggedInUser: state.loggedInUserReducer.currentlyLoggedInUser,
    loggedIn: state.loggedInUserReducer.loggedIn

})

const propertyToDispatchMapper = dispatch => ({
    logIn: (userName, password) => {
        userService
            .getUserByUserNameAndPassword(
                userName, password)
            .then(user => dispatch({
                type: "LOG_IN",
                currentlyLoggedInUser: user,
                loggedIn: true
            }))
    },
    logOut: () => {
        dispatch({
            type: "LOG_OUT",
        })
    }


})

const LoggedInUserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(LoginPopup)

export default LoggedInUserContainer


