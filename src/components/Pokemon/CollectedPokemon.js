import React from "react"
import { Link } from "react-router-dom"
import pService from "../../services/PokeAPIService";
import { CollectedPokemonBtns } from "./CollectedPokemonBtns"

const pokeService = pService.getInstance();


class CollectedPokemon extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount = () => {

    }

    render() {
        if (this.props.loggedIn) {
            return (
                <div className="container-fluid">
                    <div>
                        <h2>Collected Pokemon</h2>
                        <div className="container-fluid row">
                            {this.props.user.collectedPokemon
                                .sort((poke1, poke2) => poke2.name <= poke1.name).map((poke) => {
                                    console.log(poke)
                                    const linkVar = "/pokemon/" + poke.name
                                    return (
                                        <div className="col-12 col-md-2 mb-1 px-1" key={poke.id}>
                                            <CollectedPokemonBtns linkVar={linkVar}
                                                poke={poke}
                                                training={this.props.training}
                                                addPokemonToTeam={this.props.addPokemonToTeam}
                                                userId={this.props.user.id} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {this.props.user.role === "TRAINER" &&
                        <h2>Team Pokemon</h2>}
                    <div className="">
                        {/*this.areYouACollector*/}
                        <div className="container-fluid row mt-2">
                            {this.props.user.team
                                .sort((poke1, poke2) => poke2.level - poke1.level)
                                .map((poke) => {
                                    console.log(poke)
                                    const linkVar = "/pokemon/" + poke.pokeId.name
                                    return (
                                        <div className="col-12 col-md-4 col-xl-2 pb-1" key={poke.id}>
                                            <div>
                                                <div className="card">
                                                    <img className="card-img-top img-fluid"
                                                        src={poke.pokeId.frontSprite} />
                                                    <div className="card-body px-2">
                                                        <h5 className="card-title text-center">
                                                            {poke.pokeId.name.charAt(0).toUpperCase() + poke.pokeId.name.slice(1)}
                                                        </h5>
                                                        <p className="card-text mb-2 text-center">{"level " + poke.level}</p>
                                                        <Link className="btn btn-outline-info btn-block"
                                                            to={linkVar}>
                                                            Info
                                                        </Link>
                                                        {this.props.training && <div className="btn btn-outline-primary btn-block"
                                                            onClick={() => {
                                                                poke.level++
                                                                this.props.updatePokemonOnTeam(this.props.user.id, poke)
                                                            }}>
                                                            Train
                                                        </div>}
                                                        {this.props.training && <div className="btn btn-outline-secondary btn-block"
                                                            onClick={() => this.props.removePokemonFromTeam(this.props.user.id, poke.id)}>
                                                            Remove
                                                        </div>}
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
