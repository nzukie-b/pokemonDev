import React from "react"
import {Link} from "react-router-dom"
import pService from "../../services/PokeAPIService";

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
                    pokeService.findPokemon(poke.id)
                        .then(pokeInfo => {
                            var newCollection = this.state.team.slice();
                            newCollection.push(pokeInfo);
                            this.setState({
                                collectedPokemon: this.state.collectedPokemon,
                                team: newCollection
                            })
                        })
                })
            }
        }
    }
    areYouACollector = () => {
        if (this.props.user.role === "COLLECTOR") {
            return (<h3>You must be a trainer to have pokemon on your team</h3>)
        }
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <div className="row mt-2 container-fluid">
                    <div className="row mt-2 container-fluid">
                        <h2>Collected Pokemon</h2>
                        <div className="container-fluid">

                            {this.state.collectedPokemon.map((poke) => {
                                console.log(poke)
                                const linkVar = "/pokemon/" + poke.name
                                return (
                                    <div className="col-2 mb-1 px-0 mr-1" key={poke.id}>
                                        <Link className="btn btn-outline-info btn-block"
                                              to={linkVar}>
                                            {/* MIGHT NEED THE ONCLICK FROM SEARCH.JS*/}
                                            {poke.name}
                                        </Link>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="row mt-2 container-fluid">
                        <h2>Team Pokemon</h2>
                        {/*this.areYouACollector*/}
                        <div className="container-fluid">
                            {this.state.team.map((poke) => {
                                console.log(poke)
                                const linkVar = "/pokemon/" + poke.name
                                return (
                                    <div className="col-2 mb-1 px-0 mr-1" key={poke.id}>
                                        <Link className="btn btn-outline-info btn-block"
                                              to={linkVar}>
                                            {/* MIGHT NEED THE ONCLICK FROM SEARCH.JS*/}
                                            {poke.name}
                                        </Link>
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
