import React from "react"
import {Link} from "react-router-dom"
import pService from "../../services/PokeAPIService";
import {CollectedPokemonBtns} from "./CollectedPokemonBtns"

const pokeService = pService.getInstance();


class CollectedPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collectedPokemon: [],
            team: []
        }
    }

    componentWillMount = () => {
        if (this.props.loggedIn) {
            this.props.collectedPokemon.map((poke) => {
                pokeService.findPokemon(poke.id)
                    .then(pokeInfo => {
                        var newCollection = this.state.collectedPokemon.slice();
                        newCollection.push(pokeInfo);
                        this.setState({
                            collectedPokemon: newCollection,
                            team: this.state.team
                        })
                    })
            })
            if (this.props.user.role === "TRAINER") {
                this.props.user.team.map((poke) => {
                    pokeService.findPokemon(poke.pokeId.id)
                        .then(pokeInfo => {
                            var newCollection = this.state.team.slice();
                            var superPokemon = {
                                pokemonTeam: poke,
                                pokemonAPI: pokeInfo
                            }
                            newCollection.push(superPokemon);
                            this.setState({
                                collectedPokemon: this.state.collectedPokemon,
                                team: newCollection
                            })
                        })
                })
            }
        }
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <div className="container-fluid">
                    <div className="">
                        <h2>Collected Pokemon</h2>
                        <div className="container-fluid row">
                            {this.state.collectedPokemon.map((poke) => {
                                console.log(poke)
                                const linkVar = "/pokemon/" + poke.name
                                return (
                                    <div className="col mb-1 px-0 mr-1" key={poke.id}>
                                        <CollectedPokemonBtns linkVar={linkVar}
                                                              poke={poke}
                                                              training={this.props.training}
                                                              addPokemonToTeam={this.props.addPokemonToTeam}
                                                              userId={this.props.user.id}/>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="row mt-2 container-fluid">
                        <h2>Team Pokemon</h2>
                        {/*this.areYouACollector*/}
                        <div className="container-fluid row">
                            {this.state.team.map((poke) => {
                                console.log(poke)
                                const linkVar = "/pokemon/" + poke.pokemonAPI.name
                                return (
                                    <div className="" key={poke.pokemonAPI.id}>

                                        <div className="col">
                                            <div className="card" styles={{width: '18rem'}}>
                                                <img className="card-img-top"
                                                     src={poke.pokemonAPI.sprites.front_default}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {poke.pokemonAPI.name}
                                                    </h5>
                                                    <Link className="btn btn-outline-info btn-block"
                                                          to={linkVar}>
                                                        Info
                                                    </Link>
                                                    <div className="btn btn-warning"
                                                         onClick={() => this.props.removePokemonFromTeam(this.props.user.id, poke.pokemonTeam.id)}>
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }


}

export default CollectedPokemon
