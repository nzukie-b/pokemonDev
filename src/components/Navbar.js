import React from 'react'
import {Link} from "react-router-dom";
import {LoggedInUserContainer} from "../containers/UserContainer";

const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to="/search">Search</Link>
                <Link className="nav-item nav-link" to="/training">Training</Link>
                <LoggedInUserContainer/>
            </div>
        </div>
    </nav>)
}

export default NavBar
