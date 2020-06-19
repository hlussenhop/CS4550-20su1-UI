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
        currentUser: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            // phoneNumber: '',
            // dob: '',
            role: '',
            bio: '',
            location: '',
            studyGroups: []
        }
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
                                        id="usernameFld"
                                        type="text"
                                        placeholder={"Username"}
                                        value={this.state.username}
                                        onChange={(event) =>
                                            this.setState({ username: event.target.value })} />

                                    <input className="form-control"
                                        id="emailFld"
                                        type="email"
                                        placeholder={"Email"}
                                        value={this.state.currentUser.email}
                                        onChange={(event) =>
                                            this.setState(prevState => ({
                                                ...prevState,
                                                email: event.target.value
                                            }))} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        id="usernameFld"
                                        type="text"
                                        placeholder={"Username"}
                                        value={this.state.currentUser.username}
                                        onChange={(event) =>
                                            this.setState(prevState => ({
                                                ...prevState,
                                                username: event.target.value
                                            }))} />
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
                                            this.setState(prevState => ({
                                                ...prevState,
                                                password: event.target.value
                                            }))} />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        id="bio"
                                        type="text"
                                        placeholder="Description"
                                        value={this.state.currentUser.bio}
                                        onChange={(event) =>
                                            this.setState(prevState => ({
                                                ...prevState, bio: event.target.value
                                            }))} />
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
                                            this.setState(prevState => ({
                                                ...prevState,
                                                location: event.target.value
                                            }))} />
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