const loggedInUserReducer = (state = {
    currentlyLoggedInUser: {}
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
        default:
            return state;

    }
}

export default loggedInUserReducer;
