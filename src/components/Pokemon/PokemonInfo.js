import React from 'react'
import {Link} from "react-router-dom";


const PokemonInfo = ({pokemon, loggedIn, addPokemonToUser, userId}) => {
    return (
        <div>
            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <div className="border rounded mb-2 p-1">
                <h2>Sprites</h2>
                <ul>
                    {Object.values(pokemon.sprites).reverse()
                        .map((img) =>
                            <img src={img} alt=""/>
                        )}
                </ul>
            </div>
            <div className="border rounded mb-2 p-1">
                <h2>Type</h2>
                <ul className="row">
                    {pokemon.types.map(
                        (type) => <div className="col-6">
                            {type.type.name}
                        </div>
                    )}
                </ul>
            </div>
            <div className="border rounded mb-2 p-1">
                <h2>Stats</h2>
                <ul className="row">
                    {pokemon.stats.map((stat) => {
                        return (
                            <div className="col-6">{stat.stat.name} : {stat.base_stat}</div>
                        )
                    })}
                </ul>
            </div>
            <div className="border rounded mb-2 p-1">
                <h2>Abilities</h2>
                <ul className="row">
                    {pokemon.abilities.map((ability) => <div
                        className="col-6">{ability.ability.name}
                    </div>)}
                </ul>
            </div>
            <div className="border rounded mb-2 p-1">
                <h2>Moves</h2>
                <ul className="row">
                    {pokemon.moves.map((move) => <div className="col-2">{move.move.name}</div>)}
                </ul>
            </div>
            {collectBtn(loggedIn, addPokemonToUser, pokemon, userId)}
            <Link className="btn btn-block btn-outline-secondary" to="/search">Back</Link>
        </div>
    )
}

const collectBtn = (loggedIn, addPokemonToUser, pokemon, userId) => {
    if (loggedIn) {
        return (
            <div className="btn btn-outline-dark btn-block"
                 onClick={() => {
                     addPokemonToUser(pokemon.id, userId)}}>Collect</div>)
    }
}

export default PokemonInfo
