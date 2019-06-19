import React from "react"
import pService from "../../services/PokeAPIService"
import uService from "../../services/UserService"
import { Link } from "react-router-dom"
const pokeService = pService.getInstance();
const userService = uService.getInstance();

export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
        this.state = {
            collectedPokemon: []
        }
    }

    SubmitButton = () => {
        if (this.props.loggedIn) {
            return (
                <div
                    className="btn btn-block btn-outline-success"
                    onClick={() => {
                        console.log("Updating user " + this.props.user.id)
                        console.log(this.props.user)
                        this.props.updateUser(this.props.user)
                    }}>Update</div>)
        } else {
            return (
                <div
                    className="btn btn-block btn-success"
                    onClick={() => {
                        console.log("Creating user")
                        this.props.createUser(this.props.user)
                    }}>Create User</div>)
        }
    }

    collectedPokemon = () => {
        if (this.props.loggedIn) {
            return (
                <div className="row mt-2 container-fluid">
                    {this.state.collectedPokemon.map((poke) => {
                        const linkVar = "/pokemon/" + poke.name
                        return (
                            <div className="col-2 mb-1 px-0 mr-1" key={poke.name}>
                                <Link className="btn btn-outline-info btn-block"
                                    to={linkVar}>
                                        {/* MIGHT NEED THE ONCLICK FROM SEARCH.JS */}
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            )
        }
    }

    componentWillMount = () => {
        if (this.props.loggedIn) {
            this.props.user.collectedPokemon.map((poke) => {
                pokeService.findPokemon(poke.id)
                    .then(pokeInfo => {
                        var newCollection = this.state.collectedPokemon.slice();
                        newCollection.push(pokeInfo);
                        this.setState({
                            collectedPokemon: newCollection
                        })
                    })
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <form className="form-group">
                    <h1>Profile</h1>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text"
                            placeholder="Username"
                            className="form-control"
                            id="userName"
                            defaultValue={this.props.user.username}
                            onChange={e => this.props.user.username = e.target.value} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            placeholder="pass"
                            className="form-control"
                            id="password"
                            defaultValue={this.props.user.password}
                            onChange={e => this.props.user.password = e.target.value} />

                    </div>
                    <div>
                        <label htmlFor="first">First Name</label>
                        <input type="text"
                            placeholder="First Name"
                            className="form-control"
                            id="first"
                            defaultValue={this.props.user.firstName}
                            onChange={e => this.props.user.firstName = e.target.value} />

                    </div>
                    <div className="mb-2">
                        <label htmlFor="last">Last Name</label>
                        <input type="text"
                            placeholder="Last Name"
                            className="form-control"
                            id="last"
                            defaultValue={this.props.user.lastName}
                            onChange={e => this.props.user.lastName = e.target.value} />
                    </div>

                    {this.SubmitButton()}
                    {this.collectedPokemon()}

                </form>
            </div>
        )
    }

}
