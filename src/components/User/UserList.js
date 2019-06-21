import React from 'react'
import { Link } from 'react-router-dom'

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
    }

    render() {
        return (
            <div className="container-fluid">
                {this.props.users.map(user => {
                    return (
                        <Link className="btn btn-block btn-outline-primary"
                            to={`/profile/${user.username}`}
                            onClick={() => this.props.findUserProfile(user.id)}>
                            User Profile: {user.username}
                        </Link>
                    )
                }
                )}
            </div>
        )
    }

}