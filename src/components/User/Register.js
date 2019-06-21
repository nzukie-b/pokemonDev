import React from 'react'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                role: "COLLECTOR"
            }
        }
    }

    handleSubmit = () => {
        if (this.state.newUser.username !== "" &&
            this.state.newUser.password !== "") {
            this.props.createUser(this.state.newUser)
            this.props.findAllUsers()
            // this.props.logIn(this.state.newUser.username, this.state.newUser.password)
            this.setState({
                newUser: {}
            })
            this.props.history.push("/home")
        } else {
            alert("Please enter a new username and password")
            console.log(this.state.newUser)
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
                            onChange={e => this.state.newUser.username = e.target.value} required />

                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            placeholder="password"
                            className="form-control"
                            id="password"
                            onChange={e => this.state.newUser.password = e.target.value} required />
                    </div>
                    <div>
                        <label htmlFor="first">First Name</label>
                        <input type="text"
                            placeholder="First Name"
                            className="form-control"
                            id="first"
                            onChange={e => this.state.newUser.firstName = e.target.value} required />

                    </div>
                    <div className="mb-2">
                        <label htmlFor="last">Last Name</label>
                        <input type="text"
                            placeholder="Last Name"
                            className="form-control"
                            id="last"
                            onChange={e => this.state.newUser.lastName = e.target.value} required />
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
                        onClick={
                            this.handleSubmit
                        }>Create User
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(Register)