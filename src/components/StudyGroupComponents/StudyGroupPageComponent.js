import React from "react";
import NavBarComponent from "../NavBarComponent";
import GroupPostComponent from "./GroupPostComponent";
import NewPostComponent from "./NewPostComponent";
import {Link} from "react-router-dom";
import GroupService from "../../services/GroupService";
import UserService from "../../services/UserService";
import PostGridComponent from "./PostGridComponent";

export default class StudyGroupPageComponent extends React.Component {

    state = {
        studyGroup: null,
        userGroup: [],
        loading: true,
        currentUser: {},
        UserStatus: ""
    };

    componentDidMount() {
        GroupService.findGroupById(this.props.match.params.groupId)
            .then(studyGroup => {
                this.setState({
                    studyGroup: studyGroup
                });
                this.state.studyGroup.studentsInGroupIds.map(id =>
                    UserService.findUserById(id)
                        .then(user => {
                            this.state.userGroup.push(user)
                            this.setState({i: 1})
                        })
                );
                UserService.fetchProfile().then(user => {
                    this.setState({currentUser: user})

                })
            });
    }

    loggedInUserIsCurrentUser = () => {
        this.state.userGroup.map(user => {
            if (user.id === this.state.currentUser.id) {
                if (this.state.currentUser.role === "STUDENT") {
                    this.setState({UserStatus: "STUDENT"})
                } else if (this.state.currentUser.role === "ADMIN") {
                    this.setState({UserStatus: "STUDENT"})
                }
            }
        });
        if (this.state.currentUser === {}) {
            this.setState({UserStatus: "ANON"})
        }

    };

    render() {
        if (this.state.studyGroup !== null && this.state.userGroup !== [] && this.state.UserStatus !== "" && this.state.loading === true) {
            this.setState({loading: false})
        }
        if (this.state.loading === true) {
            this.loggedInUserIsCurrentUser()
            return (<p>Loading...</p>)

        } else {
            return (
                <div className="container">
                    <NavBarComponent/>
                    <h1>Study Group 1</h1>
                    <div className="row">
                        <div className="col-sm-4">

                            <table className="table table-hover table-light"/>
                            <thead>
                            <tr className="table-secondary">
                                <th>Group Members</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.userGroup.map(user =>
                                    <tr>
                                        {//TODO: link to users specific profile
                                        }
                                        <td>
                                            <Link to="/profile">{user.firstName}</Link>
                                            {this.state.currentUser.role === "ADMIN" &&
                                            <span>
                                                {console.log(this.state)}
                                                <button className="btn btn-danger"
                                                        onClick={() => GroupService.updateGroup(this.state.studyGroup.id, {
                                                                id: this.state.studyGroup.id,
                                                                courseId: this.state.studyGroup.courseId,
                                                                currentUserId: this.state.studyGroup.currentUserId,
                                                                studentsInGroupIds: this.state.studyGroup.studentsInGroupIds.filter(id => id !== user.id),
                                                                postIds: this.state.studyGroup.postIds
                                                            }.then(GroupService.findGroupById(this.props.match.params.groupId)
                                                                .then(studyGroup => {
                                                                    this.setState({
                                                                        studyGroup: studyGroup
                                                                    });
                                                                })
                                                            )
                                                        )}>Delete</button>
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </div>
                        < div className="col-sm-8">
                            <h2>Group Posts</h2>
                            <div className="row">
                                {this.state.studyGroup !== {} &&
                                <PostGridComponent userStatus={this.state.UserStatus}
                                                   currentUser={this.state.currentUser}
                                                   groupId={this.state.studyGroup.id}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>)
        }
    }
}