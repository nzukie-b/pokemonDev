import React from 'react'
import NavBar from './Navbar'
import UserContainer from "../containers/UserContainer";
import PokeContainer from "../containers/PokeContainer";
import UserProfilePage from "./User/UserProfilePage";
import UserProfileRoute from "./User/UserProfileRoute";

export default class Homepage extends React.Component {
    constructor(props){
        super(props)
    }
    render (){return (
        <div>
            <NavBar/>
            <UserProfileRoute/>
            <PokeContainer/>
        </div>
    )}
}


