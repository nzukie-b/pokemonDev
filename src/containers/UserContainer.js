import {connect} from 'react-redux'
import service from '../services/UserService'
import UserProfilePage from "../components/User/UserProfilePage";

const userService = service.getInstance();

const stateToPropertyMapper = state => ({
    users: state.userReducer.users,
    user: state.userReducer.user,
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
                type:"CREATE_USER",
                user: user
            }))

})

const UserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(UserProfilePage)

export default UserContainer
