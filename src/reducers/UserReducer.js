const userReducer = (state = {
    users: [],
    user: {
        username: "batman",
        password: "batmobile",
        firstName: "bruce",
        lastName: "Wayne"
    },
    loggedIn: false
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
        default:
            return state;

    }
}

export default userReducer;
