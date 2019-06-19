const pokeReducer = (state = {
    pokemon: {},
    allPokemon: [],
    filteredPokemon: []
}, action) => {
    switch (action.type) {
        case "FIND_POKEMON":
            return {
                ...state,
                pokemon: action.pokemon
            }
        case "FIND_ALL_POKEMON":
            return {
                ...state,
                allPokemon: action.allPokemon
            }
        case "FILTER_ALL_BY_POKEMON":
            return {
                ...state,
                filteredPokemon: state.allPokemon.filter((pokemon) => {
                    return pokemon.name.includes(action.filterBy)
                })
            }
        case "ADD_POKEMON_TO_USER":
            return {
                ...state,
                currentlyLoggedInUser: action.currentlyLoggedInUser
            }
        default:
            return state;
    }
}

export default pokeReducer
