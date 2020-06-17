import React from "react";
import {faUser, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LoginComponentCSS from "./LoginComponent.css";
import {Link} from "react-router-dom";

class LoginComponent extends React.Component {

    state = {
        email: '',
        password: ''
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
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Email"
                                           onChange={(event) =>
                                               this.setState({email: event.target.value})}/>
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faKey}/>
                                </span>
                                    </div>
                                    <input type="password"
                                           className="form-control"
                                           placeholder="Password"
                                           onChange={(event) =>
                                               this.setState({role: event.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <Link to={"/search"}>
                                        <button className="btn float-right login_btn"
                                        // onClick={() => this.props.findUserId(this.state.email, this.state.password)}
                                        >
                                            Sign Up
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LoginComponent