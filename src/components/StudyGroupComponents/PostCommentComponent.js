import React from "react";
import CommentService from "../../services/CommentService";
import UserService from "../../services/UserService";

export default class GroupCommentComponent extends React.Component {
    state = {
        user: {},
        editingMode: false,
        editComment: this.props.comment.text
    };

    componentDidMount() {
        UserService.findUserById(this.props.comment.commenterId)
            .then(user => this.setState({ user: user }))
    }

    changeComment = () => {
        CommentService.updateComment(this.props.comment.id,
            {
                id: this.props.comment.id,
                postId: this.props.postId,
                commenterId: this.props.comment.commenterId,
                text: this.state.editComment,
            })
    }

    render() {
        return (
            <div className="container post-comment">
                {!this.state.editingMode && this.props.userStatus !== "ANON" &&
                    <div>
                        <span className="post-comment-name">
                            {
                                this.state.user.firstName
                            }
                        </span>
                        <p className="post-comment-text mt-1">
                            {
                                this.state.editComment
                            }
                        </p>
                        {this.props.comment.commenterId === this.props.currentCommenter.id &&
                            <button className="btn btn-basic mt-2 float-right btn-sm"
                                onClick={() => this.setState({ editingMode: true })}>
                                Edit
                            </button>
                        }
                    </div>
                }
                {this.state.editingMode &&
                    <div className="input-group">
                        <span className="post-comment-name">
                            {
                                this.state.user.firstName
                            }
                        </span>
                        <input type="text"
                            className="form-control post-comment-text"
                            placeholder="New Comment"
                            value={this.state.editComment}
                            onChange={(e) =>
                                this.setState({ editComment: e.target.value })} />
                        <div className="input-group-append">
                            <button className="btn btn-primary btn-sm"
                                onClick={() => {
                                    this.changeComment();
                                    this.setState({ editingMode: false })
                                    this.props.renderComments()
                                }}>Save
                        </button>

                            <button className="btn btn-danger btn-sm"
                                onClick={() => {
                                    CommentService.deleteComment(this.props.comment.id)
                                        .then(posts => this.props.renderComments())
                                }}>
                                Delete</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}