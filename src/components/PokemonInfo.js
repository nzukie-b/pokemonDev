import React from 'react'

const PokemonInfo = ({pokemon}) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <h2>Sprites</h2>
            <ul>
                {Object.values(pokemon.sprites).reverse()
                    .map((img) =>
                        <img src={img} alt=""/>
                    )}
            </ul>
            <h2>Type</h2>
            <ul className="row">
                {pokemon.types.map(
                    (type) => <div className="col-6">{type.type.name}</div>)}
            </ul>
            <h2>Stats</h2>
            <ul className="row">
                {pokemon.stats.map((stat) => {
                    return (
                        <div className="col-6">{stat.stat.name} : {stat.base_stat}</div>
                    )
                })}
            </ul>
            <h2>Ability</h2>
            <ul className="row">
                {pokemon.abilities.map((ability) => <div
                    className="col-6">{ability.ability.name}</div>)}
            </ul>
            <h2>Moves</h2>
            <ul className="row">
                {pokemon.moves.map((move) => <div className="col-2">{move.move.name}</div>)}
            </ul>
        </div>)


}

export default PokemonInfo