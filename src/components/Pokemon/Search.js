import React from 'react'
import {Link} from "react-router-dom";

const Search = ({findPokemon, filterAllByPokemon, filteredPokemon}) => {
    return (
        <div>
            <h2>Search Page</h2>
            <input className="form-control"
                   placeholder="Pikachu"
                   onChange={(e) => {
                       filterAllByPokemon(e.target.value.toLowerCase())
                   }}/>
            <div className="row mt-3">
                {filteredPokemon.map((pok) => {
                        const linkVar = "/pokemon/" + pok.name
                        return (
                            <div className="col-12 col-md-2 col-sm-6 mb-1 px-1" key={pok.name}>
                                <Link className="btn btn-outline-info btn-block"
                                      to={linkVar}
                                      onClick={() => {
                                          findPokemon(pok.name)
                                          filterAllByPokemon("");
                                      }}>
                                    {pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}
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
