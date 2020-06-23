import React from "react";
import { Link } from "react-router-dom";
import StudyGroupList from "./StudyGroupList";
import RecentPostListComponent from "./RecentPostListComponent";
import PostService from "../../services/PostService"
import GroupService from "../../services/GroupService"
import UserService from "../../services/UserService"
import CommentService from "../../services/CommentService"

class AdminProfileComponent extends React.Component {

    state = {
        followers: [this.user, this.user],
        following: [this.user, this.user, this.user],
        studyGroups: this.props.studyGroups,
        currentUser: this.props.currentUser
    }

    removeUserComments = (userId) => {
        PostService.findAllPosts()
            .then(posts => posts.map(post => {
                const newComments = []
                post.comments.map(comment => {
                    if (comment.commenterId === userId) {
                        CommentService.deleteComment(comment.id)
                    }
                    else {
                        newComments.push(comment.id)
                    }
                })
                if (post.posterId !== userId) {
                    PostService.updatePost(post.id, {
                        ...this.post,
                        comments: newComments
                    })
                }
            }))
    }

    removeUserPosts = (userId) => {
        this.state.currentUser.studyGroups.map(groupId => {
            PostService.findPostsByStudyGroup(groupId)
                .then(posts => {
                    const newPosts = []
                    posts.map(post => {
                        if (post.posterId === userId) {
                            PostService.deletePost(post.id)
                        }
                        else {
                            newPosts.push(post.id)
                        }
                    })
                    GroupService.findGroupById(groupId)
                        .then(group =>
                            GroupService.updateGroup(groupId, {
                                ...group,
                                postsIds: newPosts
                            }).then(group => group))
                })
        }
        )
    }

    removeUser = (userId) => {
        this.state.currentUser.studyGroups.map(groupId => {
            GroupService.findGroupById(groupId)
                .then(group =>
                    GroupService.updateGroup(groupId, {
                        ...group,
                        studentsInGroupIds: group.studentsInGroupIds.filter(id => id !== userId)
                    })
                        .then(group => group))
        })
        UserService.deleteUser(userId).then(users => users)
        UserService.logout()
            .catch(e => { })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({
                        currentUser: {}
                    })
                }
            })
    }

    deleteUser = (userId) => {
        this.removeUserPosts(userId)
        this.removeUserComments(userId)
        this.removeUser(userId)
    }

    render() {
        return (
            <div>
                {
                    (!this.props.visiting) &&
                    <span>
                        <Link to={`/${this.state.currentUser.id}/editProfile`}>
                            <button className="btn login_btn">
                                Edit
                    </button>
                        </Link>
                        <Link to={`/`}>
                            <button
                                onClick={() => {
                                    this.deleteUser(this.state.currentUser.id)
                                }}
                                className="btn float-right login_btn">
                                Delete
                        </button>
                        </Link>
                    </span>
                }

                <div className="profile">


                    {/*<div className="row">*/}
                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Following</h5>*/}
                    {/*        <StudyGroupList list={this.state.followers}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Followers</h5>*/}
                    {/*        <StudyGroupList list={this.state.following}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Courses</h5>*/}
                    {/*        <StudyGroupList list={this.state.courseList}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h5 className="profile-heading">Pending Requests to Study Group: {this.studyGroup.name}</h5>*/}
                    {/*    <PendingRequestsComponent list={this.state.pendingRequests}/>*/}
                    {/*</div>*/}
                    <div>
                        <h5 className="profile-heading">Study Groups:</h5>
                        <StudyGroupList list={this.props.studyGroups}
                            visiting={this.props.visiting}
                        />
                    </div>
                    <br />
                    {
                        !this.props.visiting &&
                        <div>
                            <h5 className="profile-heading">Your Recent Posts:</h5>
                            <RecentPostListComponent user={this.props.currentUser} />
                        </div>
                    }


                </div>
            </div>


        )
    }

}

export default AdminProfileComponent