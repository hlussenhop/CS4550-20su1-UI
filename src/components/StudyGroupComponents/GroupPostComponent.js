import React from "react";
import PostCommentComponent from "./PostCommentComponent";
import PostService from "../../services/PostService";
import UserService from "../../services/UserService";
import CommentListComponent from "./CommentListComponent";

export default class GroupPostComponent extends React.Component {
    state = {
        commentInputText: "",
        isBeingEdited: false,
        editingTitle: this.props.post.title,
        editingBody: this.props.post.text,
        user: {}
    };

    componentDidMount() {
        UserService.findUserById(this.props.post.posterId)
            .then(user => this.setState({user: user}))
    }

    changePost = () => {
        PostService.updatePost(this.props.post.id,
            {
                studyGroupId: this.props.groupId,
                posterId: this.props.currentUser.id,
                title: this.state.editingTitle,
                text: this.state.editingBody
            })
    }

    render() {
        return (
            <div className="container card group-post group-card-body">
                {!this.state.isBeingEdited && this.props.userstatus !== "ANON" &&
                    <div>
                        <h5>{this.state.editingTitle}</h5>
                        <span>{this.state.user.firstName}</span>
                        <p>{this.state.editingBody}</p>
                        {this.props.post.posterId === this.props.currentUser.id &&
                            <button className="btn btn-primary"
                                onClick={() => this.setState({ isBeingEdited: true })}>
                                Edit Post
                            </button>
                        }

                        <h5>Comments</h5>
                        {
                            <CommentListComponent 
                                userStatus={this.props.userstatus}
                                currentCommenter={this.props.currentUser}
                                postId={this.props.post.id} />
                        }
                    </div>

                }
                {this.state.isBeingEdited &&
                    <div>
                        <input type="text"
                            className="form-control"
                            placeholder="New Title"
                            value={this.state.editingTitle}
                            onChange={(e) =>
                                this.setState({ editingTitle: e.target.value })} />

                        <textarea className="form-control"
                            placeholder="New Body"
                            value={this.state.editingBody}
                            onChange={(e) =>
                                this.setState({ editingBody: e.target.value })} />

                        <div className="btn-group">
                            <button className="btn btn-primary"
                                onClick={() => {
                                    this.changePost()
                                    // this.setState({editingTitle: "", editingBody: ""});
                                    this.setState({ isBeingEdited: false })

                                }}>Save
                        </button>

                            <button className="btn btn-danger"
                                onClick={() => {
                                    PostService.deletePost(this.props.post.id)
                                    .then(this.props.renderPosts())}}>
                                        Delete Post</button>
                        </div>

                        {
                            <CommentListComponent currentCommenter={this.props.currentUser}
                                postId={this.props.post.id} />
                        }
                    </div>
                }

            </div>
        )
    }
}