import React from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

export default class NavBarComponent extends React.Component {
    state = {
        username: ''
    }

    componentDidMount() {
        UserService.fetchProfile()
            .catch(e => { })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({ username: currentUser.username })
                }
            })
    }

    componentDidUpdate(prevPros, prevState, snapshot) {
        if ((prevState.username !== this.state.username)) {
            UserService.fetchProfile()
                .catch(e => { })
                .then(currentUser => {
                    if (currentUser) {
                        this.setState({ username: currentUser.username })
                    }
                })
        }
    }

    logout = () => {
        UserService.logout()
            .catch(e => { })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({ username: '' })
                }
            })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Study Group</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search Courses</Link>
                        </li>
                        {
                            this.state.username &&
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                        }
                    </ul>
                </div>
                <ul className="navbar-nav">
                    {
                        !this.state.username &&
                        <li className="nav-item">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Sign In</a>
                            </li>
                        </li>
                    }
                    {
                        this.state.username &&
                        <li className="nav-item">
                            <li className="nav-item">
                                <a className="nav-link" href="/"
                                    onClick={this.logout}>Log Out</a>
                            </li>
                        </li>
                    }
                    {
                        !this.state.username &&
                        <li className="nav-item">
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>
                        </li>
                    }
                </ul>
            </nav>
        )
    }
}