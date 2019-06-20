import React from 'react'
import CollectedPokemon from "../User/CollectedPokemon";

export default class TeamPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.user)
        if (this.props.loggedIn) {
            this.props.findTeam(this.props.user.id);
        }
    }

    render() {
        if (!this.props.loggedIn) {
            return (<h1>You Must Be logged in to use this page</h1>)
        } else if (this.props.loggedIn && this.props.user.role === "COLLECTOR") {
            return (<div>
                <h1>You Must Be a trainer to use this page</h1>
                <h3>Please consider becoming a trainer</h3>
            </div>)
        } else {
            return (
                <div>
                    <CollectedPokemon loggedIn={this.props.loggedIn}
                                      user={this.props.user}
                                      collectedPokemon={this.props.user.collectedPokemon}/>
                </div>)
        }
    }

}
