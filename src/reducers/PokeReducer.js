const pokeReducer = (state = {
    pokemon: {
        "name": "pikachu"
    }}, action) => {
    switch (action.type) {
        case "FIND_POKEMON":
            return {
                pokemon: action.pokemon
            }
        default:
            return state;
    }
}

export default pokeReducer