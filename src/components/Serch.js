import React from 'react'
import { Link } from "react-router-dom";
import service from "../services/PokeAPIService"
const pokeService = service.getInstance();

const Search = ({ findPokemon, filterAllByPokemon, filteredPokemon }) => {
    return (
        <div>
            <h2>Search Page</h2>
            <input className="form-control"
                placeholder="Pikachu"
                onChange={(e) => {
                    if (e.target.value !== "") {
                        filterAllByPokemon(e.target.value.toLowerCase())
                    }
                }} />
            <div className="row mt-3">
                {filteredPokemon.map((pok) => {
                    const linkVar = "/pokemon/" + pok.name
                    return (
                        <div className="col-2 mb-1 px-1">
                            <Link className="btn btn-outline-info btn-block"
                                to={linkVar}
                                onClick={() => {
                                    findPokemon(pok.name)
                                }}>
                                {pok.name}
                            </Link>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Search
