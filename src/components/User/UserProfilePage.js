import React from "react"
import pService from "../../services/PokeAPIService"
import uService from "../../services/UserService"
import CollectedPokemon from "./CollectedPokemon";

const pokeService = pService.getInstance();
const userService = uService.getInstance();

export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
        if (this.props.loggedIn) {
            this.props.updateCurrentUser(this.props.user.id)
        }
        this.state = {
            collectedPokemon: []
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
                               onChange={e => this.props.user.username = e.target.value}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               placeholder="pass"
                               className="form-control"
                               id="password"
                               defaultValue={this.props.user.password}
                               onChange={e => this.props.user.password = e.target.value}/>

                    </div>
                    <div>
                        <label htmlFor="first">First Name</label>
                        <input type="text"
                               placeholder="First Name"
                               className="form-control"
                               id="first"
                               defaultValue={this.props.user.firstName}
                               onChange={e => this.props.user.firstName = e.target.value}/>

                    </div>
                    <div className="mb-2">
                        <label htmlFor="last">Last Name</label>
                        <input type="text"
                               placeholder="Last Name"
                               className="form-control"
                               id="last"
                               defaultValue={this.props.user.lastName}
                               onChange={e => this.props.user.lastName = e.target.value}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type">Last Name</label>
                        <select
                            placeholder="Last Name"
                            className="form-control"
                            id="type"
                            defaultValue={this.props.user.role}
                            onChange={e => this.props.user.role = e.target.value}>
                            <option value="COLLECTOR">Collector</option>
                            <option value="TRAINER">Trainer</option>
                        </select>
                    </div>
                    {this.SubmitButton()}
                    <CollectedPokemon loggedIn={this.props.loggedIn}
                                      user={this.props.user}
                                      collectedPokemon={this.state.collectedPokemon}/>

                </form>
            </div>
        )
    }

}
