import React from "react"
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import PokemonInfo from "./PokemonInfo"
import Search from "./Search";

export default class PokemonComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllPokemon()
        this.props.findPokemon("ditto")
    }

    redirectToSearch = () => {
        if (window.location.pathname == "/") {
            return <Redirect to="/search"></Redirect>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    {/* {this.redirectToSearch()} */}
                    <Route path="/search"
                           render={() =>
                               <Search
                                   filteredPokemon={this.props.filteredPokemon}
                                   findPokemon={this.props.findPokemon}
                                   filterAllByPokemon={this.props.filterAllByPokemon}/>
                           }
                    />
                    <Route path="/pokemon"
                           render={() =>
                               <PokemonInfo
                                   pokemon={this.props.pokemon}
                                   loggedIn={this.props.loggedIn}
                                   addPokemonToUser={this.props.addPokemonToUser}
                                   userId={this.props.currentlyLoggedInUser.id}/>}/>
                </div>
            </div>
        )
    }
}