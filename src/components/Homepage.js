import React from 'react'
import NavBar from './Navbar'
import UserContainer from "../containers/UserContainer";
import PokeContainer from "../containers/PokeContainer";
import UserProfileRoute from "./User/UserProfileRoute";
import TrainingRoute from "./Training/TrainingRoute";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar/>
                <UserProfileRoute/>
                <PokeContainer/>
                <TrainingRoute/>
            </div>
        )
    }
}


