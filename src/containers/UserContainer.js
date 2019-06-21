import {connect} from 'react-redux'
import service from '../services/UserService'
import UserProfilePage from "../components/User/UserProfilePage";
import LoginPopup from "../components/LoginPopup";
import UserList from '../components/User/UserList';
import Register from '../components/User/Register';
import pService from "../services/PokeAPIService";
import tservice from '../services/TeamService'
import TeamPage from "../components/Training/TeamPage";


const userService = service.getInstance();
const teamService = tservice.getInstance();
const pokeService = pService.getInstance();

const stateToPropertyMapper = state => ({
    users: state.userReducer.users,
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn,
    profileUser: state.userReducer.profileUser
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
                    user: user,
                })
            )
    },
    findUserProfile: (userId) => {
        userService.findUserById(userId)
            .then(user => dispatch({
                type: "UPDATE_PROFILE_USER",
                profileUser: user
            }))
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
        userService.getUserByUserNameAndPassword(
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
    updateCurrentUser: (userId) => {
        userService
            .findUserById(
                userId)
            .then(user => dispatch({
                type: "LOG_IN",
                user: user,
                loggedIn: true
            }))
    },
    updateProfileUserByUserName: (username) => {
        userService.findUserByUserName(username).then(user => dispatch({
            type: "UPDATE_PROFILE_USER",
            profileUser: user
        }))
    },
    findTeam: (userId) => {
        teamService.findTeam(userId)
            .then(team =>
                dispatch({
                    type: "FIND_TEAM",
                    team: team
                })
            )
    },
    addPokemonToTeam: (userId, pokemonId) => {
        teamService.addPokemonToTeam(userId, pokemonId)
            .then(team => dispatch({
                type: "ADD_POKEMON_TO_TEAM",
                team: team
            }))
    },
    removePokemonFromTeam: (userId, pokemonId) => {
        teamService.removePokemonFromTeam(userId, pokemonId)
            .then(team => dispatch({
                type: "REMOVE_POKEMON_FROM_TEAM",
                team: team
            }))
    },
    updatePokemonOnTeam: (userId, pokemon) => {
        teamService.updatePokemonOnTeam(userId, pokemon)
            .then(team => dispatch({
                type: "UPDATE_POKEMON_ON_TEAM",
                team: team
            }))
    },
})

const UserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(UserProfilePage)

const LoggedInUserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(LoginPopup)

const UserListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(UserList)

const UserRegisterContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(Register)

const TeamContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(TeamPage)



export {LoggedInUserContainer, UserContainer, UserListContainer, UserRegisterContainer, TeamContainer}
