const userReducer = (state = {
    users: [],
    user: {
        id: -1,
        username: "batman",
        password: "batmobile",
        firstName: "bruce",
        lastName: "Wayne",
        collectedPokemon: [],
        team: []
    },
    loggedIn: false,
    profileUser: {
        collectedPokemon: [],
        team: []
    }
}, action) => {
    switch (action.type) {
        case "FIND_ALL_USERS":
            return {
                ...state,
                users: action.users
            }
        case "FIND_USER_BY_ID" || "CREATE_USER" || "UPDATE_USER":
            return {
                ...state,
                user: action.user
            }
        case "UPDATE_PROFILE_USER":
            return {
                ...state,
                profileUser: action.profileUser
            }
        case "LOG_IN":
            console.log(action.user)
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        case "IS_LOGGED_IN":
            return state;
        case "FIND_TEAM":
            console.log(action.team)
            return {
                ...state,
                user: {
                    id: state.user.id,
                    username: state.user.username,
                    password: state.user.password,
                    firstName: state.user.firstName,
                    lastName: state.user.lastName,
                    collectedPokemon: state.user.collectedPokemon,
                    role: state.user.role,
                    team: action.team
                }
            }
        case "ADD_POKEMON_TO_TEAM":
            return {
                ...state,
                user: {
                    id: state.user.id,
                    username: state.user.username,
                    password: state.user.password,
                    firstName: state.user.firstName,
                    lastName: state.user.lastName,
                    collectedPokemon: state.user.collectedPokemon,
                    role: state.user.role,
                    team: action.team
                }
            }
        case "REMOVE_POKEMON_FROM_TEAM":
            return {
                ...state,
                user: {
                    id: state.user.id,
                    username: state.user.username,
                    password: state.user.password,
                    firstName: state.user.firstName,
                    lastName: state.user.lastName,
                    collectedPokemon: state.user.collectedPokemon,
                    role: state.user.role,
                    team: action.team
                }
            }
        case "UPDATE_POKEMON_ON_TEAM":
            return {
                ...state,
                user: {
                    id: state.user.id,
                    username: state.user.username,
                    password: state.user.password,
                    firstName: state.user.firstName,
                    lastName: state.user.lastName,
                    collectedPokemon: state.user.collectedPokemon,
                    role: state.user.role,
                    team: action.team
                }
            }
        default:
            return state;

    }
}

export default userReducer;
