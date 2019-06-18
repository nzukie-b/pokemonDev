import React from "react";
import {Route} from "react-router-dom";
import UserContainer from "../../containers/UserContainer";

const UserProfileRoute = () => {
    return (
        <Route path="/profile"
               render={() => <UserContainer/>}/>
    )
}

export default UserProfileRoute
