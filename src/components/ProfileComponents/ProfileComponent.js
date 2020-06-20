import React from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService"
import StudentProfileComponent from "./StudentProfileComponent";
import AdminProfileComponent from "./AdminProfileComponent";

class ProfileComponent extends React.Component {


    studyGroup = {
        name: 'CS4910',
        professor: 'Jose',
        count: 10
    }

    post = {
        course: 'CS4910',
        title: 'Hello',
        text: "Join my study group! :)",
        date: 'June 17, 2020'
    }

    state = {
        visiting: this.props.match.params.userId,
        currentUser: {},
        studyGroups: [this.studyGroup, this.studyGroup],
        recentPosts: [this.post, this.post, this.post, this.post],
    }

    componentDidMount() {
        if (this.state.visiting) {
            this.setState({
                currentUser:
                    UserService.findUserById(this.state.visiting)
                        .then(currentUser => {
                            if (currentUser) {
                                this.setState({ currentUser: currentUser })
                            }
                        })
            })
        } else {
            UserService.fetchProfile()
                .catch(e => {
                })
                .then(currentUser => {
                    if (currentUser) {
                        this.setState({ currentUser: currentUser })
                    }
                })
        }
    }
    /*
        findUser = () => {
            UserService.findUserById(this.state.currentUser.id)
            .then(currentUser => {
                return currentUser
            })
        }
    */
    render() {
        return (
            <div>
                {
                    !this.state.visiting &&
                    <Link to={`/${this.state.currentUser.id}/editProfile`}>
                        <button className="btn login_btn">
                            Edit
                        </button>
                    </Link>
                }

                <div>
                    <h2 className="d-flex justify-content-center">
                        {this.state.currentUser.firstName} {this.state.currentUser.lastName}
                    </h2>
                    <p className="d-flex justify-content-center">{this.state.currentUser.location}</p>
                    <h5 className="d-flex justify-content-center">{this.state.currentUser.bio}</h5>
                </div>
                {
                    (this.state.currentUser.role === "STUDENT") &&
                    <StudentProfileComponent currentUser={this.state.currentUser}
                        visiting={this.state.visiting}
                        studyGroups={this.state.studyGroups}
                        recentPosts={this.state.recentPosts} />
                }
                {
                    this.state.currentUser.role === "ADMIN" &&
                    <AdminProfileComponent currentUser={this.state.currentUser}
                        visiting={this.state.visiting}
                        studyGroups={this.state.currentUser.studyGroups}
                        recentPosts={this.state.recentPosts} />
                }
            </div>

        )

    }
}

export default ProfileComponent