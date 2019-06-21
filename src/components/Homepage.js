import React from 'react'
import NavBar from './Navbar'
import UserContainer from "../containers/UserContainer";
import PokeContainer from "../containers/PokeContainer";
import UserProfileRoute from "./User/UserProfileRoute";
import UserRegisterRoute from './User/UserRegisterRoute'
import UserListRoute from './User/UserListRoute'
import TrainingRoute from "./Training/TrainingRoute";
import UserService from '../services/UserService';


export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     users: []
        // }
        // uService.findAllUsers().then(users => this.setState({users: users}))
    }

    render() {
        return (
            <div>
                <NavBar />
                <UserRegisterRoute />
                <UserProfileRoute />
                <PokeContainer />
                <TrainingRoute />
                <UserListRoute />
                
            </div>
        )
    }
}


