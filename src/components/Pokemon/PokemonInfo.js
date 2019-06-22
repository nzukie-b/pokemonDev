import React from 'react'
import { Link, withRouter } from "react-router-dom";

class PokemonInfo extends React.Component {
    constructor(props) {
        super(props);
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const pokem = paths[2]
        console.log(paths[2])
        this.props.findPokemon(pokem)
    }

    redirectBack = () => {
        this.props.history.push("/search")
    }

    render() {
        return (
            <div>
                <h1>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h1>
                <div className="border rounded mb-2 p-1">
                    <h2>Sprites</h2>
                    <ul>
                        {Object.values(this.props.pokemon.sprites).reverse()
                            .map((img) =>
                                <img src={img} alt="" />
                            )}
                    </ul>
                </div>
                <div className="border rounded mb-2 p-1">
                    <h2>Type</h2>
                    <ul className="row">
                        {this.props.pokemon.types.map(
                            (type) => <div className="col-6">
                                {type.type.name}
                            </div>
                        )}
                    </ul>
                </div>
                <div className="border rounded mb-2 p-1">
                    <h2>Stats</h2>
                    <ul className="row">
                        {this.props.pokemon.stats.map((stat) => {
                            return (
                                <div className="col-6">{stat.stat.name} : {stat.base_stat}</div>
                            )
                        })}
                    </ul>
                </div>
                <div className="border rounded mb-2 p-1">
                    <h2>Abilities</h2>
                    <ul className="row">
                        {this.props.pokemon.abilities.map((ability) => <div
                            className="col-6">{ability.ability.name}
                        </div>)}
                    </ul>
                </div>
                <div className="border rounded mb-2 p-1">
                    <h2>Moves</h2>
                    <ul className="row">
                        {this.props.pokemon.moves.map((move) => <div className="col-2">{move.move.name}</div>)}
                    </ul>
                </div>
                {collectBtn(this.props.loggedIn, this.props.addPokemonToUser, this.props.pokemon, this.props.userId, this.redirectBack)}
                <Link className="btn btn-block btn-outline-secondary" to="/search">Back</Link>
            </div>
        )
    }
}

const collectBtn = (loggedIn, addPokemonToUser, pokemon, userId, redirectBack) => {
    if (loggedIn) {
        return (
            <div className="btn btn-outline-dark btn-block"
                onClick={() => {
                    addPokemonToUser(pokemon.id, userId, pokemon)
                    alert(pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1) + ' collected.');
                    redirectBack();
                }}>Collect</div>
        )
    }
}
export default withRouter(PokemonInfo)
