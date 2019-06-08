import React from 'react'
import service from '../services/PokeAPIService'

const PokeAPIServie = service.getInstance();

renderPokemon = (text) => {
    PokeAPIServie.findPokemon(text)
    .then(pokeList => pokeList.map(pokemon => {
        <h1>{pokemon.name}</h1>
    }))
}




const SearchPage = () => {
    return (
        <div className="container">
            <h1>Search Page</h1>
            <input className="form-control" placeholder="Enter Pokemon Name" 
            onChange={(e) => {
                renderPokemon(e.currentTarget.value);
            }}></input>
            {/* <button onClick={(e) => {
                PokeAPIServie
            }} */}


        </div>
        )
}

export default SearchPage