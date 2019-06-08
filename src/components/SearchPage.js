import React from 'react'
import service from '../services/PokeAPIService'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import pokeReducer from "../reducers/PokeReducer"

const PokeAPIServie = service.getInstance();
const store = createStore(pokeReducer)

const renderPokemon = (text) => {
    PokeAPIServie.findPokemon(text)
        .then(pokemon => {
            return <h1>{pokemon.name}</h1>
        })
}


const SearchPage = () => {
    return (
        <Provider store={}>
            <div className="container">
                <h1>Search Page</h1>
                <input className="form-control" placeholder="Enter Pokemon Name" />
            </div>
        </Provider>
    )
}

export default SearchPage