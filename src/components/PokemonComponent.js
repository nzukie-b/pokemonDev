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
                </div>
                <h1>{this.props.pokemon.name}</h1>
                <img src={this.props.pokemon.sprites.front_default} alt="front"/>
                <img src={this.props.pokemon.sprites.back_default} alt="back"/>
            </div>
        )
    }
}