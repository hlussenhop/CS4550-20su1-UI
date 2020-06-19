import React from "react";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import UserService from "../services/UserService"

class SignUpComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        role: '',
        error: null
    }


    signup = () => {
        UserService.signup({
            id: new Date().getTime(),
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            role: this.state.role,
            studyGroups: []
        })
            .catch(e => {
                this.setState({
                    error: 'Unable to register'
                })
            })
            .then(currentUser => {
                if (currentUser) {
                    this.props.history.push("/profile")
                }
            })
    }




    render() {
        return (
            <div className="login">
                <div className="d-flex justify-content-center h-100">
                    <div className="card login_card">
                        <div className="card-header">
                            <h3>Sign Up</h3>
                            {
                                this.state.error &&
                                <div className="alert alert-danger">
                                    {this.state.error}
                                </div>
                            }
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
                                        placeholder="First Name"
                                        onChange={(event) =>
                                            this.setState({ firstName: event.target.value })} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        onChange={(event) =>
                                            this.setState({ lastName: event.target.value })} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={(event) =>
                                            this.setState({ email: event.target.value })} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <select className="form-control"
                                        onChange={(event) =>
                                            this.setState({ role: event.target.value })}>
                                        <option value="STUDENT">Student</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faKey} />
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

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faKey} />
                                        </span>
                                    </div>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        onChange={(event) =>
                                            this.setState({ confirmPassword: event.target.value })} />
                                </div>

                                <div className="form-group">
                                    {
                                        ((this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== ''
                                        && this.state.username !== '' && this.state.password !== '' && this.state.confirmPassword !== ''
                                        && this.state.role !== '') &&
                                        (this.state.password === this.state.confirmPassword)) &&
                                            <Link to={"/profile"}>
                                                <button className="btn float-right login_btn"
                                                        onClick={this.signup}>
                                                    Sign Up
                                                </button>
                                        </Link>
                                    }
                                    {
                                        ((this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== ''
                                            && this.state.username !== '' && this.state.password !== '' && this.state.confirmPassword !== ''
                                            && this.state.role !== '') &&
                                        (this.state.password !== this.state.confirmPassword)) &&
                                        <button className="btn float-right login_btn"
                                                onClick={() =>
                                                    alert("Make sure the two passwords are the same")}>
                                            Sign Up
                                        </button>
                                    }

                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Have an account?<a href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUpComponent