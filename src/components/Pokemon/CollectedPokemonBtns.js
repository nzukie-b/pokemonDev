import React from 'react'
import {Link} from "react-router-dom";

const CollectedPokemonBtns = ({linkVar, poke, training, addPokemonToTeam, userId}) => {
    if (!training) {
        return (
            <Link className="btn btn-outline-info btn-block"
                  to={linkVar}>
                {/* MIGHT NEED THE ONCLICK FROM SEARCH.JS*/}
                {poke.name}
            </Link>)
    } else {
        return (
            <div className="btn btn-outline-info btn-block"
                 onClick={() => addPokemonToTeam(userId, poke.id)}>
                {/* MIGHT NEED THE ONCLICK FROM SEARCH.JS*/}
                {poke.name}
            </div>)
    }
}
export {CollectedPokemonBtns}
