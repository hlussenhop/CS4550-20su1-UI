import React from "react";
import NavBarComponent from "./NavBarComponent";
import GroupPostComponent from "./GroupPostComponent";
import NewPostComponent from "./NewPostComponent";

export default class AdminStudyGroupComponent extends React.Component {
    state = {
        viewingAdmin: {
            name: "Admin"
        },

        studentsInGroup: [
            {name: "Alice"}
        ],
        groupName: "Group 1",
        posts: [
            {
                id:123,
                title: "Post 2 from admin",
                text: "example text for a group post",
                poster: {name: "Admin"},
                comments: [
                    {
                        commenterName: "Alice",
                        commentText: "this is some comment text"
                    },
                    {
                        commenterName: "Alice",
                        commentText: "this is some more comment text"
                    },
                    {
                        commenterName: "Admin",
                        commentText: "this is some more comment text from an Admin"
                    }
                ]
            }
        ],
        makingNewPost: false
    }


    changeIsMakingNewPost = (bool) =>
        this.setState({makingNewPost: bool});

    makeNewPost = (post) =>
        this.state.posts.push(post)


    render() {
        return (
            <div className="container">
                <NavBarComponent/>
                <h1>{this.state.groupName}</h1>
                <div className="row">
                    <table className="col-sm-4">
                        <thead>
                        <table className="table table-hover table-light"/>
                        <tr className="table-secondary">
                            <th>Group Members

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.studentsInGroup.map(student =>
                            <span>
                                <tr>
                                    <td>
                                        <p>{student.name}</p>
                                    </td>
                                </tr>
                            </span>
                        )}
                        </tbody>

                    </table>
                    <div className="col-sm-8">
                        <h2>Group Posts</h2>
                        <div className="row">
                            {this.state.posts.map(post =>
                                <GroupPostComponent post={post}/>)}
                            {this.state.makingNewPost &&
                                <NewPostComponent poster={this.state.viewingAdmin}
                                                  makeNewPost={this.makeNewPost}
                                                  changeIsMakingNewPost={this.changeIsMakingNewPost}/>
                            }
                            {!this.state.makingNewPost &&
                                <button className="btn btn-success"
                                onClick={() => this.setState({makingNewPost: true})}>
                                    New Post
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}