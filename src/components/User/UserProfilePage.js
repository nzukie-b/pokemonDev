import React from "react"

const UserProfilePage = () => {
    return (<form className="form-group">
        <h1>Profile</h1>
        <div>
            <label for="userName">Username</label>
            <input type="text"
                   placeholder="Username"
                   className="form-control"
                   id="userName"/>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password"
                   placeholder="pass"
                   className="form-control"
                   id="password"/>
        </div>
        <div>
            <label for="first">First Name</label>
            <input type="text"
                   placeholder="First Name"
                   className="form-control"
                   id="first"/>
        </div>
        <div>
            <label for="last">Last Name</label>
            <input type="text"
                   placeholder="Last Name"
                   className="form-control"
                   id="last"/>
        </div>

    </form>)

}

export default UserProfilePage
