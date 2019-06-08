import React from 'react'
import {connect} from 'react-redux'
import service from '../services/PokeAPIService'
import PokemonComponent from "../components/PokemonComponent"

const pokeService = service.getInstance();

const stateToPropertyMapper = state => ({
    pokemon: state.pokemon,
    allPokemon: state.allPokemon,
    filteredPokemon: state.filteredPokemon
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
                allPokemon: allPokemon
            }))
    },
    filterAllByPokemon: (search) => {
        dispatch({
            type: "FIND_ALL_POKEMON",
            filteredPokemon: this.findAllPokemon().filter((pok) => {
                return pok.name.includes(search)
            })

        })
    }
})

const PokeContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(PokemonComponent)

export default PokeContainer
