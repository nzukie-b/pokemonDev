import React from 'react'
import CollectedPokemon from "../Pokemon/CollectedPokemon";

export default class TeamPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.user)
        if (this.props.loggedIn) {
            this.props.findTeam(this.props.user.id);
            console.log("Two " + this.props.team)
            this.props.updateCurrentUser(this.props.user.id)
        }
    }

    clickLogin = () => {
        document.getElementById('loginBtn').click();
    }

    render() {
        if (!this.props.loggedIn) {
            this.clickLogin()
            return (
                <h1>You Must Be logged in to use this page</h1>
            )
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
                        collectedPokemon={this.props.user.collectedPokemon}
                        training={true}
                        addPokemonToTeam={this.props.addPokemonToTeam}
                        removePokemonFromTeam={this.props.removePokemonFromTeam}
                        updatePokemonOnTeam={this.props.updatePokemonOnTeam}
                    userList={false}/>
                </div>)
        }
    }

}
