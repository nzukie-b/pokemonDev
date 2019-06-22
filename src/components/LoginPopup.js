import React from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

export default class LoginPopup extends React.Component {
    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.username = ""
        this.password = ""
        this.state = {
            show: false,
        };

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleLogin() {
        this.setState({ show: false });
        console.log(this.username + this.password)
        this.props.logIn(this.username, this.password)
    }

    handleShow() {
        this.setState({ show: true });
    }

    loginLogoutBtn = () => {
        if (!this.props.loggedIn) {
            return (
                <div className="row">
                    <Link className="ml-2 nav-item nav-link" to={`/register`}>
                        Sign Up
                        </Link>
                    <div className="ml-1 btn btn-primary nav-item" id="loginBtn" onClick={this.handleShow}>
                        Login </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <Link className="ml-2 nav-item nav-link" to={`/profile/${this.props.user.username}`}
                        onClick={() => this.props.findUserProfile(this.props.user.id)}>
                        Your Profile
                        </Link>
                    <Link to="/home" className="ml-1 btn btn-primary nav-item" onClick={() => this.props.logOut()}>
                        Logout
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.loginLogoutBtn()}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <label htmlFor="userName">Username</label>
                            <input type="text"
                                placeholder="Username"
                                className="form-control"
                                id="userName"
                                onChange={e => this.username = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                placeholder="password"
                                className="form-control"
                                id="password"
                                onChange={e => this.password = e.target.value} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Link className="btn btn-primary" to="/home" onClick={() => this.handleLogin()}>
                            Login
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
