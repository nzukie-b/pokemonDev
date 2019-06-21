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
                    <h4>Hi {this.props.user.firstName.charAt(0).toUpperCase() +
                        this.props.user.firstName.slice(1)}!</h4>
                    <h5>You've collected {collectionSize} out of 964 Pokemon</h5>
                </div>
            )
        }
    }

    getTeamLevelTotal = (user) => {
        var levelTotal = 0;
        user.team.map(poke => {
            levelTotal += poke.level
        })
        return levelTotal;
    }

    showTeamLevelTotal = () => {
        if (this.props.loggedIn && this.props.user.role == 'TRAINER') {
            var levelTotal = this.getTeamLevelTotal(this.props.user)
            return (
                <h5>Your team has a combined level of {levelTotal}</h5>
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
            this.getTeamLevelTotal(user2) - this.getTeamLevelTotal(user1))
        if (allUsers.length > 10) {
            allUsers = allUsers.splice(10)
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
                <h1 className="mb-1">Top 10 Users</h1>
                {this.showTopTenTeams()}
            </div>
        )
    }

}
