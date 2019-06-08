import React from "react"

export default class PokemonComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Search Page</h1>
                    <input className="form-control"
                           placeholder="Enter Pokemon Name"
                           onChange={(e) => {
                               if (e.target.value !== "") {
                                   this.props.findPokemon(e.target.value.toLowerCase())
                               }
                           }}/>

                    <h1>{this.props.pokemon.name}</h1>
                    <h2>Sprites</h2>
                    {Object.values(this.props.pokemon.sprites).reverse()
                        .map((img) =>
                            <img src={img} alt=""/>
                        )}
                    <h2>type</h2>
                    {this.props.pokemon.types.map(
                        (type) => <p>{type.type.name}</p>)}
                    <h2>Stats</h2>
                    {this.props.pokemon.stats.map((stat) => {
                        return (<div>
                            <h3>{stat.stat.name}  :  {stat.base_stat}</h3>
                        </div>)
                    })}

                </div>
            </div>
        )
    }
}