import React from "react";
import {Button, Modal} from "react-bootstrap";

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
        this.props.logIn(this.username,this.password)
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Login
                </Button>
                <Button variant="primary" onClick={() => this.props.logOut()}>
                    Logout
                </Button>

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
                                   onChange={e => this.username = e.target.value}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   placeholder="pass"
                                   className="form-control"
                                   id="password"
                                   onChange={e => this.password = e.target.value}/>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleLogin()}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
