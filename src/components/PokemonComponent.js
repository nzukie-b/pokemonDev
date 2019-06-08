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
                               this.props.findPokemon(e.target.value)
                           }}/>
                </div>
                <hi>{this.props.pokemon.name}</hi>
            </div>
        )
    }
}