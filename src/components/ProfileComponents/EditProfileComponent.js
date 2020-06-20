import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faKey,
    faUser,
    faPhone,
    faCalendarDay,
    faFileAlt,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
class EditProfileComponent extends React.Component {
    state = {
        currentUser: {}
    }
    componentDidMount() {
        UserService.findUserById(this.props.match.params.userId)
            .then(currentUser => {
                this.setState({ currentUser: currentUser })
            })
    }
    update = () => {
        UserService.update(this.props.match.params.userId, this.state.currentUser)
            .catch(e => {
                this.props.history.push("/editProfile")
            })
            .then(currentUser => {
                if (currentUser)
                    this.props.history.push("/profile")
            })
    }
    render() {
        return (
            <div className="editProfile">
                <div className="d-flex justify-content-center h-100">
                    <div className="card login_card">
                        <div className="card-header">
                            <h3>Profile</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>

                                    <input readOnly
                                        className="form-control"
                                        id="firstFld"
                                        type="text"
                                        placeholder={"First Name"}
                                        value={this.state.currentUser.firstName} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>

                                    <input readOnly
                                        className="form-control"
                                        id="lastFld"
                                        type="text"
                                        placeholder={"Last Name"}
                                        value={this.state.currentUser.lastName} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>

                                    <input readOnly
                                        className="form-control"
                                        id="usernameFld"
                                        type="text"
                                        placeholder={"Username"}
                                        title={"You cannot change your username"}
                                        value={this.state.currentUser.username} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        id="emailFld"
                                        type="email"
                                        placeholder={"Email"}
                                        value={this.state.currentUser.email}
                                        onChange={(event) =>
                                            this.setState({
                                                currentUser: {
                                                    ...this.state.currentUser,
                                                    email: event.target.value
                                                }
                                            })} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faKey} />
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        id="passwordFld"
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.currentUser.password}
                                        onChange={(event) =>
                                            this.setState({
                                                currentUser: {
                                                    ...this.state.currentUser,
                                                    password: event.target.value
                                                }
                                            })} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </span>
                                    </div>
                                    <textarea
                                        className="form-control"
                                        id="bioFld"
                                        type="text"
                                        placeholder="Description"
                                        value={this.state.currentUser.bio}
                                        onChange={(event) =>
                                            this.setState({
                                                currentUser: {
                                                    ...this.state.currentUser,
                                                    bio: event.target.value
                                                }
                                            })} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        id="locationFld"
                                        type="text"
                                        placeholder="Location"
                                        value={this.state.currentUser.location}
                                        onChange={(event) =>
                                            this.setState({
                                                currentUser: {
                                                    ...this.state.currentUser,
                                                    location: event.target.value
                                                }
                                            })} />
                                </div>

                                <div className="form-group">
                                    <Link to={"/profile"}>
                                        <button className="btn float-right login_btn"
                                            id="updateBtn"
                                            onClick={() => this.update()}>
                                            Update
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditProfileComponent