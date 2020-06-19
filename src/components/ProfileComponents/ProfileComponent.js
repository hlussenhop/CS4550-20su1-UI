import React from "react";
import {Link} from "react-router-dom";
import FollowList from "./FollowList";
import RecentPostListComponent from "./RecentPostListComponent";
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
        currentUser: {
            id: 0,
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "",
        },
        studyGroups: [this.studyGroup, this.studyGroup],
        recentPosts: [this.post, this.post, this.post, this.post],
    }

    componentDidMount() {
        {console.log(this.state.visiting)}
        if(this.state.visiting) {
            this.setState({
                currentUser:
                    UserService.findUserById(this.state.visiting)
                        .then(currentUser => {
                            if (currentUser) {
                                this.setState({currentUser: currentUser})
                            }
                        }) })
        } else {
            UserService.fetchProfile()
                .catch(e => {
                })
                .then(currentUser => {
                    if (currentUser) {
                        this.setState({currentUser: currentUser})
                    }
                })
        }
}

    render() {
        return (
            <div>
                {
                    (this.state.currentUser.role === "STUDENT") &&
                    <StudentProfileComponent currentUser={this.state.currentUser}
                    studyGroups={this.state.studyGroups}
                    recentPosts={this.state.recentPosts}/>
                }
                {
                    this.state.currentUser.role === "ADMIN" &&
                    <AdminProfileComponent currentUser={this.state.currentUser}
                                           studyGroups={this.state.studyGroups}
                                           recentPosts={this.state.recentPosts}/>
                }
            </div>

        )

    }
}

export default ProfileComponent