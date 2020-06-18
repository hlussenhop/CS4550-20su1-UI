import React from "react";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/LoginStyle.css";
import { Link } from "react-router-dom";
import UserService from "../services/UserService"

export default class LoginComponent extends React.Component {
    state = {
        username: '',
        password: ''
    }

    login = () => {
        UserService.login(this.state.username, this.state.password)
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(currentUser => {
                if (currentUser)
                    this.props.history.push("/profile")
            })
    }

    render() {
        return (
            <div className="login">
                <div className="d-flex justify-content-center h-100">
                    <div className="card login_card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={(event) =>
                                            this.setState({ username: event.target.value })} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faKey} />
                                        </span>
                                    </div>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(event) =>
                                            this.setState({ password: event.target.value })} />
                                </div>

                                <div className="form-group">
                                    <Link className="btn float-right login_btn"
                                        to={"/profile"}
                                        onClick={this.login}>
                                        Sign In
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/signup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}