import React from 'react'
import {Redirect} from 'react-router-dom'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                role: ""
            }
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <form className="form-group">
                    <h1>Sign Up</h1>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text"
                               placeholder="Username"
                               className="form-control"
                               id="userName"
                               onChange={e => this.state.newUser.username = e.target.value} required/>

                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               placeholder="password"
                               className="form-control"
                               id="password"
                               onChange={e => this.state.newUser.password = e.target.value} required/>
                    </div>
                    <div>
                        <label htmlFor="first">First Name</label>
                        <input type="text"
                               placeholder="First Name"
                               className="form-control"
                               id="first"
                               onChange={e => this.state.newUser.firstName = e.target.value} required/>

                    </div>
                    <div className="mb-2">
                        <label htmlFor="last">Last Name</label>
                        <input type="text"
                               placeholder="Last Name"
                               className="form-control"
                               id="last"
                               onChange={e => this.state.newUser.lastName = e.target.value} required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type">Role</label>
                        <select
                            placeholder="COLLECTOR"
                            className="form-control"
                            defaultValue="COLLECTOR"
                            id="type"
                            onChange={e => this.state.newUser.role = e.target.value}>
                            <option value="COLLECTOR">Collector</option>
                            <option value="TRAINER">Trainer</option>
                        </select>
                    </div>
                    <div
                        className="btn btn-block btn-success"
                        onClick={(e) => {
                            e.preventDefault();

                            console.log(this.state.newUser)
                            this.props.createUser(this.state.newUser).then(
                                this.setState({
                                    newUser: {}
                                })
                            )

                        }}>Create User
                    </div>
                </form>
            </div>
        )
    }
}
