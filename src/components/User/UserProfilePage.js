import React from "react"

export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
    }

    SubmitButton = () => {
        if (this.props.loggedIn) {
            return (
                <div
                    className="btn btn-block btn-success"
                    onClick={() => {
                        console.log("Updating user " + this.props.user.id)
                        console.log(this.props.user)
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
        return (<form className="form-group container-fluid">
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
                <label for="first">First Name</label>
                <input type="text"
                       placeholder="First Name"
                       className="form-control"
                       id="first"
                       defaultValue={this.props.user.firstName}
                       onChange={e => this.props.user.firstName = e.target.value}/>

            </div>
            <div>
                <label for="last">Last Name</label>
                <input type="text"
                       placeholder="Last Name"
                       className="form-control"
                       id="last"
                       defaultValue={this.props.user.lastName}
                       onChange={e => this.props.user.lastName = e.target.value}/>

            </div>

            {this.SubmitButton()}

        </form>)
    }

}
