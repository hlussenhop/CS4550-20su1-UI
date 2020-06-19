import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faKey,
    faUser,
    faPhone,
    faCalendarDay,
    faFileAlt,
   faGlobe
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";

class EditProfileComponent extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        bio: '',
        location: ''

    }

    componentDidMount() {
        UserService.findUserById(this.props.match.params.userId)
            .then(currentUser => {
                this.setState({
                    username: currentUser.username,
                    email: currentUser.email,
                    password: currentUser.password,
                    bio: currentUser.bio,
                    location: currentUser.location
                })
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
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                    </div>
                                    <input readOnly
                                           className="form-control"
                                           id="usernameFld"
                                           type="text"
                                           placeholder={"Username"}
                                           value={this.state.username}
                                           onChange={(event) =>
                                               this.setState({username: event.target.value})}
                                    />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                    </div>
                                    <input className="form-control"
                                           id="emailFld"
                                           type="email"
                                           placeholder={"Email"}
                                           value={this.state.email}
                                           onChange={(event) =>
                                               this.setState({email: event.target.value})}
                                    />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faKey}/>
                                </span>
                                    </div>
                                    <input className="form-control"
                                           id="passwordFld"
                                           type="password"
                                           placeholder="Password"
                                            value={this.state.password}
                                           onChange={(event) =>
                                               this.setState({password: event.target.value})}
                                    />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faFileAlt}/>
                                </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        id="bio"
                                        type="text"
                                        placeholder="Description"
                                        value={this.state.bio}
                                        onChange={(event) =>
                                            this.setState({bio: event.target.value})}
                                    />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </span>
                                    </div>
                                    <input className="form-control"
                                           id="locationFld"
                                           type="text"
                                           placeholder="Location"
                                           value={this.state.location}
                                           onChange={(event) =>
                                               this.setState({location: event.target.value})}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <Link to={"/profile"}>
                                        <button className="btn float-right login_btn"
                                                id="updateBtn"
                                            // onClick={() =>this.props.updateUser(this.state.email, this.state.password,
                                            //     this.state.phoneNumber, this.state.dob, this.state.bio, this.state.location)}
                                        >
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