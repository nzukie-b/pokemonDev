import React from 'react'
import { Route } from "react-router-dom";
import { UserListContainer } from "../../containers/UserContainer"

const UserListRoute = () => {
    return (
        <Route path="/home"
            render={() => <UserListContainer/>} />
    )
}
export default UserListRoute
