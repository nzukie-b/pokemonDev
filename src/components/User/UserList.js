import React from 'react'
import {Link} from 'react-router-dom'
import CollectedPokemon from "../Pokemon/CollectedPokemon";

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
    }

    render() {
        return (
            <div className="container">
                <h1 className="mb-1">Users</h1>
                {this.props.users.map(user => {
                        return (
                            <div className="mb-2">
                                <Link className="btn btn-block btn-outline-primary"
                                      to={`/profile/${user.username}`}
                                      onClick={() => this.props.findUserProfile(user.id)}>
                                    User Profile: {user.username}
                                </Link>
                                <CollectedPokemon loggedIn={true}
                                                  user={user}
                                                  collectedPokemon={user.collectedPokemon}
                                                  training={false}
                                />
                                <br></br>
                                </div>
                        )
                    }
                )}
            </div>
        )
    }

}
