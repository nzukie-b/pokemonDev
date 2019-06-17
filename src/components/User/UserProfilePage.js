import React from "react"

export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllUsers()
        this.updateUserTemp = this.props.user
    }


    render() {
        return (<form className="form-group container-fluid">
            <h1>Profile</h1>
            <div>
                <label for="userName">Username</label>
                <input type="text"
                       placeholder="Username"
                       className="form-control"
                       id="userName"
                       defaultValue={this.props.user.username}
                       onChange={e => this.updateUserTemp.username = e.target.value}/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password"
                       placeholder="pass"
                       className="form-control"
                       id="password"
                       defaultValue={this.props.user.password}
                       onChange={e => this.updateUserTemp.password = e.target.value}/>

            </div>
            <div>
                <label for="first">First Name</label>
                <input type="text"
                       placeholder="First Name"
                       className="form-control"
                       id="first"
                       defaultValue={this.props.user.firstName}
                       onChange={e => this.updateUserTemp.firstName = e.target.value}/>

            </div>
            <div>
                <label for="last">Last Name</label>
                <input type="text"
                       placeholder="Last Name"
                       className="form-control"
                       id="last"
                       defaultValue={this.props.user.lastName}
                       onChange={e => this.updateUserTemp.lastName = e.target.value}/>

            </div>
            <div
                className="btn btn-block btn-success"

                onClick={() => {
                    console.log("Creating user")
                    this.props.createUser(this.updateUserTemp)}}>
                Submit
            </div>

        </form>)
    }

}
