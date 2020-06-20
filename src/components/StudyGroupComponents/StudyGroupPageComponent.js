import React from "react";
import NavBarComponent from "../NavBarComponent";
import GroupPostComponent from "./GroupPostComponent";
import NewPostComponent from "./NewPostComponent";
import { Link } from "react-router-dom";
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
                            this.setState({ i: 1 })
                        })
                );
                UserService.fetchProfile().then(user => {
                    this.setState({ currentUser: user })

                })
            });
    }

    loggedInUserIsCurrentUser = () => {
        this.state.userGroup.map(user => {
            if (user.id === this.state.currentUser.id) {
                if (this.state.currentUser.role === "STUDENT") {
                    this.setState({ UserStatus: "STUDENT" })
                } else if (this.state.currentUser.role === "ADMIN") {
                    this.setState({ UserStatus: "STUDENT" })
                }
            }
        });
        if (this.state.currentUser === {}) {
            this.setState({ UserStatus: "ANON" })
        }

    };

    render() {
        if (this.state.studyGroup !== null && this.state.userGroup !== [] &&
            this.state.UserStatus !== "" && this.state.loading === true) {
            this.setState({ loading: false })
        }
        if (this.state.loading === true) {
            this.loggedInUserIsCurrentUser()
            return (<p>Loading...</p>)

        } else {
            return (
                <div className="container">
                    <NavBarComponent />
                    <h1>Study Group </h1>
                    <h2>{this.state.studyGroup.courseName} ID: {this.state.studyGroup.courseId}</h2>
                    <div className="row">
                        <div className="col-sm-3">
                            <div>
                                <div className="list-group">
                                    <br /> <br />

                                    <button type="button"
                                        className="list-group-item list-group-item-action list-group-item-secondary">
                                        <span>Group Members</span>
                                    </button>
                                    {
                                        this.state.userGroup.map(user =>
                                            <button type="button"
                                                className="list-group-item list-group-item-action">
                                                <span>
                                                    <Link to={this.state.currentUser.id === user.id ?
                                                        '/profile' : `/profile/${user.id}`}>
                                                        {user.firstName} {user.lastName}
                                                    </Link>
                                                    {(this.state.currentUser.role === "ADMIN" &&
                                                        this.state.currentUser.id !== user.id) &&
                                                        <span>
                                                            <button className="btn btn-danger float-right"
                                                                onClick={() => {
                                                                    GroupService.updateGroup(this.state.studyGroup.id, {
                                                                        ...this.state.studyGroup,
                                                                        studentsInGroupIds: this.state.studyGroup.studentsInGroupIds.filter(id => id !== user.id)
                                                                    })
                                                                    .then(GroupService.findGroupById(this.props.match.params.groupId)
                                                                        .then(studyGroup => {
                                                                            this.setState({
                                                                                studyGroup: studyGroup
                                                                            });
                                                                        })
                                                                    )
                                                                    UserService.update(user.id, {
                                                                        ...user,
                                                                        studyGroups: user.studyGroups.filter(id => id !== this.state.studyGroup.id)
                                                                    })
                                                                }
                                                                }>
                                                                REMOVE
                                                                </button>
                                                        </span>
                                                    }

                                                    {
                                                        this.state.currentUser.id === user.id &&
                                                        <Link to={`/profile`}>
                                                            <button className="btn btn-danger btn-sm float-right"
                                                                onClick={() => {
                                                                    GroupService.updateGroup(this.state.studyGroup.id, {
                                                                        ...this.state.studyGroup,
                                                                        studentsInGroupIds: this.state.studyGroup.studentsInGroupIds.filter(id => id !== user.id)
                                                                    })
                                                                    .then(GroupService.findGroupById(this.props.match.params.groupId)
                                                                        .then(studyGroup => {
                                                                            this.setState({
                                                                                studyGroup: studyGroup
                                                                            });
                                                                        })
                                                                    )
                                                                    UserService.update(user.id, {
                                                                        ...user,
                                                                        studyGroups: user.studyGroups.filter(id => id !== this.state.studyGroup.id)
                                                                    })
                                                                }
                                                                }>
                                                                LEAVE
                                                                    </button>
                                                        </Link>
                                                    }
                                                </span>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        < div className="col-sm-9">
                            <h4>Dashboard</h4>
                            <div className="row">
                                {this.state.studyGroup !== {} &&
                                    <PostGridComponent userStatus={this.state.UserStatus}
                                        currentUser={this.state.currentUser}
                                        groupId={this.state.studyGroup.id} />
                                }
                            </div>
                        </div>
                    </div>
                </div>)
        }
    }
}