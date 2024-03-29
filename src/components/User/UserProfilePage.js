import React from "react"
import pService from "../../services/PokeAPIService"
import uService from "../../services/UserService"
import CollectedPokemon from "../Pokemon/CollectedPokemon";


export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const username = paths[2]
        console.log(paths[2])
        // this.props.updateProfileUserByUserName(username)
        if (this.props.loggedIn) {
            this.props.updateCurrentUser(this.props.user.id)
            // }
        } else {
            // console.log(username);
            this.props.updateProfileUserByUserName(username)
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
                    }}>Update</div>
            )
        }
    }

    render() {
        if (this.props.user.id === this.props.profileUser.id && this.props.loggedIn) {
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
                            <label htmlFor="type">Role</label>
                            <select
                                placeholder="Collector"
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
                                          collectedPokemon={this.props.user.collectedPokemon}
                                          training={false}
                                          userList={false}/>

                    </form>
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <form className="form-group">
                        <h1>Profile</h1>
                        <div>
                            <label htmlFor="userName">Username</label>
                            <input type="text"
                                   placeholder="Username"
                                   className="form-control"
                                   value={this.props.profileUser.username}
                                   onChange={e => this.props.profileUser.username = e.target.value} readOnly/>
                        </div>
                        <div>
                            <label htmlFor="first">First Name</label>
                            <input type="text"
                                   placeholder="First Name"
                                   className="form-control"
                                   value={this.props.profileUser.firstName}
                                   onChange={e => this.props.profileUser.firstName = e.target.value} readOnly/>

                        </div>
                        <div className="mb-2">
                            <label htmlFor="last">Last Name</label>
                            <input type="text"
                                   placeholder="Last Name"
                                   className="form-control"
                                   value={this.props.profileUser.lastName}
                                   onChange={e => this.props.profileUser.lastName = e.target.value} readOnly/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="type">Role</label>
                            <select disabled
                                    placeholder="Collector"
                                    className="form-control"
                                    value={this.props.profileUser.role}
                                    onChange={e => this.props.profileUser.role = e.target.value}>
                                <option value="COLLECTOR">Collector</option>
                                <option value="TRAINER">Trainer</option>
                            </select>
                        </div>
                        {console.log(this.props.profileUser)}
                        <CollectedPokemon loggedIn={true}
                                          user={this.props.profileUser}
                                          collectedPokemon={this.props.profileUser.collectedPokemon}
                                          training={false}
                                          userList={false}/>

                    </form>
                </div>
            )
        }
    }

}
