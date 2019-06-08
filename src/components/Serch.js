import React from 'react'
import {Link} from "react-router-dom";

const Search = ({findPokemon, filterAllByPokemon,filteredPokemon}) => {
    return (
        <div>
            <h1>Search Page</h1>
            <input className="form-control"
                   placeholder="Pikachu"
                   onChange={(e) => {
                       if (e.target.value !== "") {
                           filterAllByPokemon(e.target.value.toLowerCase())
                       }
                   }}/>
            {filteredPokemon.map((pok) => {
                const linkVar = "/pokemon/" + pok.name
                return (<div><Link
                    to={linkVar}
                    onClick={(e) =>
                        findPokemon(pok.name)}>
                    {pok.name}
                </Link>
                </div>)
            })}

        </div>)

}

export default Search
