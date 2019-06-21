import React from 'react'
import { Link } from 'react-router-dom'
import CollectedPokemon from "../Pokemon/CollectedPokemon";

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
    }

    showCollectionProgress = () => {
        if (this.props.loggedIn) {
            var collectionSize = this.props.user.collectedPokemon.length
            return (
                <div>
                    <p>Hi {this.props.user.firstName.charAt(0).toUpperCase() +
                        this.props.user.firstName.slice(1)}!</p>
                    <p>You've collected {collectionSize} out of 964 Pokemon</p>
                </div>
            )
        }
    }

    getTeamLevelTotal = (user) => {
        var levelTotal = 0;
        user.team.map(poke => {
            levelTotal += parseInt(poke.level)
        })
        return levelTotal;
    }

    showTeamLevelTotal = () => {
        if (this.props.loggedIn && this.props.user.role == 'TRAINER') {
            var levelTotal = this.getTeamLevelTotal(this.props.user)
            return (
                <p>Your team has a combined level of {levelTotal}</p>
            )
        }
    }

    showActiveUserInfo = () => {
        if (this.props.loggedIn) {
            return (
                <div className="my-3 border rounded p-2">
                    <Link className="btn btn-block btn-outline-primary"
                        to={`/profile/${this.props.user.username}`}
                        onClick={() => this.props.findUserProfile(this.props.user.id)}>
                        User Profile: {this.props.user.username}
                    </Link>
                    <CollectedPokemon loggedIn={true}
                        user={this.props.user}
                        collectedPokemon={this.props.user.collectedPokemon}
                        training={false}
                    />
                    <br></br>
                </div>
            )
        }
    }

    showTopTenTeams = () => {
        var allUsers = this.props.users.sort((user1, user2) =>
            this.getTeamLevelTotal(user2) < this.getTeamLevelTotal(user1))
        if (allUsers.length > 10) {
            allUsers = allUsers.splice(0, 10 - allUsers.lengths)
        }
        return allUsers.map(user => {
            return (
                <div className="my-3 border rounded p-2">
                    <Link className="btn btn-block btn-outline-primary"
                        to={`/profile/${user.username}`}
                        onClick={() => this.props.findUserProfile(user.id)}>
                         {"User Profile:" + user.username}
                    </Link>
                    <CollectedPokemon loggedIn={true}
                        user={user}
                        collectedPokemon={user.collectedPokemon}
                        training={false}
                    />
                    <br></br>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="">
                    {this.showCollectionProgress()}
                    {this.showTeamLevelTotal()}
                    {this.showActiveUserInfo()}
                </div>
                <h1 className="mb-1">Users</h1>
                {this.showTopTenTeams()}
            </div>
        )
    }

}
