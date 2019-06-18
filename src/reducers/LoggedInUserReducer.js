const loggedInUserReducer = (state = {
    currentlyLoggedInUser: {},
    loggedIn: false
}, action) => {
    switch (action.type) {
        case "LOG_IN":
            console.log(action.currentlyLoggedInUser)
            return {
                ...state,
                currentlyLoggedInUser: action.currentlyLoggedInUser,
                loggedIn: action.loggedIn
            }
        case "LOG_OUT":
            return {
                currentlyLoggedInUser: {},
                loggedIn: false
            }
        case "IS_LOGGED_IN":
            return state
        default:
            return state;

    }
}

export default loggedInUserReducer;
