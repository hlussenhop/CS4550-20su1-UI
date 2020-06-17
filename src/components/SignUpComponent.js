import React from "react";
import {faUser, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class SignUpComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    }

    render() {
        return (
            <div className="login">
                <div className="d-flex justify-content-center h-100">
                    <div className="card login_card">
                        <div className="card-header">
                            <h3>Sign Up</h3>
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
                                           placeholder="First Name"
                                           onChange={(event) =>
                                               this.setState({firstName: event.target.value})}/>
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Last Name"
                                           onChange={(event) =>
                                               this.setState({lastName: event.target.value})}/>
                                </div>

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
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                    </div>
                                    <select className="form-control"
                                            onChange={(event) =>
                                                this.setState({role: event.target.value})}>
                                        <option value="STUDENT">Student</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
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
                                               this.setState({firstName: event.target.value})}/>
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faKey}/>
                                </span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                                </div>

                                <div className="form-group">
                                    <Link to={"/search"}>
                                        <button className="btn float-right login_btn"
                                        // onClick={() => this.props.createUser(this.state)}
                                        >
                                            Sign Up
                                        </button>
                                    </Link>
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