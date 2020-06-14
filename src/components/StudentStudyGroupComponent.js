import React from "react";
import NavBarComponent from "./NavBarComponent";
import GroupPostComponent from "./GroupPostComponent";
import NewPostComponent from "./NewPostComponent";

export default class StudentStudyGroupComponent extends React.Component {
    render() {
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
                        <tr>
                            <td>Group member 1</td>
                        </tr>
                        <tr>
                            <td>Group member 2</td>
                        </tr>
                        <tr>
                            <td>Group member 3</td>
                        </tr>
                        </tbody>

                    </table>
                    <div className="col-sm-8">
                        <h2>Group Posts</h2>
                        <div className="row">
                            <GroupPostComponent/>
                            <GroupPostComponent/>
                            <NewPostComponent/>
                            <button className="btn btn-success">
                                New Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}