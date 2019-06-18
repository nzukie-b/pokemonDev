import React from 'react'
import NavBar from './Navbar'
import UserContainer from "../containers/UserContainer";
import PokeContainer from "../containers/PokeContainer";

export default class Homepage extends React.Component {
    constructor(props){
        super(props)
    }
    render (){return (
        <div>
            <NavBar/>
            <UserContainer />
            <PokeContainer/>
        </div>
    )}
}


