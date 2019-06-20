const teamReducer = (state = {
    team: []
}, action) => {
    switch (action.type) {
        case "FIND_TEAM":
            return {
                ...state,
                team: action.team
            }
        case "ADD_POKEMON_TO_TEAM":
            return {
                ...state,
                team: action.team
            }
        case "REMOVE_POKEMON_FROM_TEAM":
            return {
                ...state,
                team: action.team
            }
        case "UPDATE_POKEMON_ON_TEAM":
            return {
                ...state,
                team: action.team
            }
        default:
            return state;
    }
}

export default teamReducer
