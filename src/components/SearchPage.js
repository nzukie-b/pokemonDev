import React from 'react'
import service from '../services/PokeAPIService'

const PokeAPIServie = service.getInstance()

const SearchPage = () => {
    return (
        <div className="container">
            <h1>Search Page</h1>
            <input className="form-control" placeholder="Enter Pokemon Name"></input>
            
        </div>
        )
}

export default SearchPage