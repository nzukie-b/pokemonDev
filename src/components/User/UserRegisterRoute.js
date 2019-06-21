import React from 'react'
import { Route } from "react-router-dom";
import { UserRegisterContainer } from '../../containers/UserContainer';

const UserRegisterRoute = () => {
    return (
        <Route path="/register"
            render={() => <UserRegisterContainer />} />
    )
}
export default UserRegisterRoute