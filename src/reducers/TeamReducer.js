const teamReducer = (state = {
    team: [],
    apiTeam:[{}]
}, action) => {
    switch (action.type) {
        case "FIND_TEAM":
            console.log(action.team)
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
        case "CLEAR_API_TEAM":
            return {
                ...state,
                apiTeam: []
            }
        case "ADD_POKEMON_ON_API_TEAM":
            return {
                ...state,
                apiTeam: [... state.apiTeam, action.poke]
            }
        default:
            return state;
    }
}

export default teamReducer
