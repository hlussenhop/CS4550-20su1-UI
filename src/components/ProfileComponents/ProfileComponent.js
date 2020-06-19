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

    state = {
        currentUser: {
            id: 0,
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            studyGroups: [this.studyGroup, this.studyGroup]
        }
    }

    componentDidMount() {
        UserService.fetchProfile()
            .catch(e => {
            })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({currentUser: currentUser})
                }
            })
    }

    render() {
        return (
            <div>
                {
                    (this.state.currentUser.role === "STUDENT") &&
                    <StudentProfileComponent currentUser={this.state.currentUser}/>
                }
                {
                    this.state.currentUser.role === "ADMIN" &&
                    <AdminProfileComponent currentUser={this.state.currentUser}/>
                }
            </div>

        )

    }
}

export default ProfileComponent