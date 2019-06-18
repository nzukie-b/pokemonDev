import {connect} from 'react-redux'
import service from '../services/PokeAPIService'
import PokemonComponent from "../components/Pokemon/PokemonComponent"

const pokeService = service.getInstance();

const stateToPropertyMapper = state => ({
    pokemon: state.pokeReducer.pokemon,
    allPokemon: state.pokeReducer.allPokemon,
    filteredPokemon: state.pokeReducer.filteredPokemon,
    loggedIn: state.loggedInUserReducer.loggedIn
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


    }
})

const PokeContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(PokemonComponent)

export default PokeContainer
