import React from "react"

export default class PokemonComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <hi>{this.props.pokemon.name}</hi>
            </div>
        )
    }
}