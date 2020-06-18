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
        loading: true
    };

    componentDidMount() {
        GroupService.findGroupById(123)
            .then(studyGroup => {
                this.setState({
                    studyGroup: studyGroup
                });
                this.state.studyGroup.studentsInGroupIds.map(id =>
                    UserService.getUserById(id)
                        .then(user =>
                            this.state.userGroup.push(user)
                        ));
                UserService.getUserById(this.state.studyGroup.currentUserId)
                    .then(user =>
                        this.setState({
                            currentUser: user
                        }));
            });


    }



    render() {
        if(this.state.studyGroup !== null && this.state.loading === true) {
            this.setState({loading: false})
        }
        if(this.state.loading === true) {
            return(<p>Loading...</p>)
        } else {
             return (
                <div className="container">
                    <NavBarComponent/>
                    <h1>Study Group 1</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <thead>
                            <table className="table table-hover table-light"/>
                            <tr className="table-secondary">
                                <th>Group Members</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.userGroup.map(user =>
                                    <tr>

                                        <td >
                                            <p>{user.firstName}</p>
                                        </td>

                                    </tr>

                                )
                            }
                            </tbody>
                        </div>
                        <div className="col-sm-8">
                            <h2>Group Posts</h2>
                            <div className="row">
                                {this.state.studyGroup !== {} &&
                                <PostGridComponent currentUser={this.state.currentUser}
                                                   groupId={this.state.studyGroup.id}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>)
        }
    }
}