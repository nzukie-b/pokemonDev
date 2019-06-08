import React from "react"

export default class PokemonComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllPokemon()

    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Search Page</h1>
                    <input className="form-control"
                           placeholder="Pikachu"
                           onChange={(e) => {
                               if (e.target.value !== "") {
                                   this.props.filterAllByPokemon(e.target.value.toLowerCase())
                                   this.props.findPokemon(e.target.value.toLowerCase())
                               }
                           }}/>
                    {this.props.allPokemon.filter((pokemon)=>{return pokemon.name.includes(this.props.pokemon.name)}).map((pok) => <div>{pok.name}</div>)}

                    <h1>{this.props.pokemon.name}</h1>
                    <h2>Sprites</h2>
                    <ul>
                        {Object.values(this.props.pokemon.sprites).reverse()
                            .map((img) =>
                                <img src={img} alt=""/>
                            )}
                    </ul>
                    <h2>Type</h2>
                    <ul className="row">
                        {this.props.pokemon.types.map(
                            (type) => <div className="col-6">{type.type.name}</div>)}
                    </ul>
                    <h2>Stats</h2>
                    <ul className="row">
                        {this.props.pokemon.stats.map((stat) => {
                            return (
                                <div className="col-6">{stat.stat.name} : {stat.base_stat}</div>
                            )
                        })}
                    </ul>
                    <h2>Ability</h2>
                    <ul className="row">
                        {this.props.pokemon.abilities.map((ability) => <div
                            className="col-6">{ability.ability.name}</div>)}
                    </ul>
                    <h2>Moves</h2>
                    <ul className="row">
                        {this.props.pokemon.moves.map((move) => <div className="col-2">{move.move.name}</div>)}
                    </ul>

                </div>
            </div>
        )
    }
}