import React from "react";
import NavBarComponent from "../NavBarComponent";
import GroupPostComponent from "./GroupPostComponent";
import NewPostComponent from "./NewPostComponent";
import {Link} from "react-router-dom";
import GroupService from "../../services/GroupService";

export default class StudyGroupPageComponent extends React.Component {

    state = {studyGroup:{}}

    componentDidMount() {
        GroupService.findGroupById(123)
            .then(studyGroup => {
                console.log(studyGroup)
                this.setState({
                    studyGroup: studyGroup
                })})


    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <NavBarComponent/>
                <h1>Study Group 1</h1>
                <div className="row">
                    <table className="col-sm-4">
                        <thead>
                        <table className="table table-hover table-light"/>
                        <tr className="table-secondary">
                            <th>Group Members</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*
                            {
                                this.state.studentsInGroup.map(student =>
                                        <span>
                                <tr>
                                    <td>
                                        <Link to={'/profile'}>{student.name}</Link>
                                    </td>
                                </tr>
                            </span>
                                )
                            }
                            */
                        }
                        </tbody>
                    </table>
                    <div className="col-sm-8">
                        <h2>Group Posts</h2>
                        <div className="row">
                            {/*
                                {
                                    this.state.posts.map(post =>
                                        <GroupPostComponent post={post}/>)
                                }
                                <button className="btn btn-success">
                                New Post
                                </button>
                               */
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}