import React from 'react'
import { connect } from 'react-redux'
import service from '../services/PokeAPIService'
import PokemonComponent from "../components/PokemonComponent"

const pokeService = service.getInstance();

const stateToPropertyMapper = state => ({
    pokemon: state.pokemon
})

const propertyToDispatchMapper = dispatch => ({
    findPokemon: (name) => {
        pokeService.findPokemon(name)
            .then(pokemon => dispatch({
                type: "FIND_POKEMON",
                pokemon: pokemon
            }))
    }
})

const PokeContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(PokemonComponent)

export default PokeContainer
