import {connect} from 'react-redux'
import service from '../services/PokeAPIService'
import uServce from "../services/UserService"
import PokemonComponent from "../components/Pokemon/PokemonComponent"

const pokeService = service.getInstance();
const userService = uServce.getInstance();

const stateToPropertyMapper = state => ({
    pokemon: state.pokeReducer.pokemon,
    allPokemon: state.pokeReducer.allPokemon,
    filteredPokemon: state.pokeReducer.filteredPokemon,
    loggedIn: state.userReducer.loggedIn,
    user: state.userReducer.user
})

const propertyToDispatchMapper = dispatch => ({
    findPokemon: (name) => {
        pokeService.findPokemon(name)
            .then(pokemon => dispatch({
                type: "FIND_POKEMON",
                pokemon: pokemon
            }))
    },
    findAllPokemon: () => {
        pokeService.findAllPokemon()
            .then(allPokemon => dispatch({
                type: "FIND_ALL_POKEMON",
                allPokemon: allPokemon.results
            }))
    },
    filterAllByPokemon: (search) => {
        dispatch({
            type: "FILTER_ALL_BY_POKEMON",
            filterBy: search
        })
    },
    addPokemonToUser: (pokeId, userId, poke) => {
        userService.collectPokemon(pokeId,userId, poke).then(
            user => dispatch({
                type: "ADD_POKEMON_TO_USER",
                user: user
            }))

    }
})

const PokeContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(PokemonComponent)

export default PokeContainer
