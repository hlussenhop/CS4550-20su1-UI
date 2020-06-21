import React from "react";
import CommentService from "../../services/CommentService";
import PostCommentComponent from "./PostCommentComponent";

export default class CommentListComponent extends React.Component {
    state = {
        comments: [],
        commentInput: "",
        changed: false
    };

    componentDidMount() {
        CommentService.findCommentsForPost(this.props.postId)
            .then(comments => this.setState({ comments: comments }))
    }

    deleteComment = (commentId) => {
        CommentService.deleteComment(commentId)
            .then(comments => {
                //this.renderComments()
                this.setState({
                    comments: comments
                })
            })
    }

    renderComments = () => {
        CommentService.findCommentsForPost(this.props.postId)
            .then(comments => {
                this.setState({
                    comments: comments,
                    changed: true
                })
            })
    }

    render() {
        return (
            <div className="col">
                {
                    this.state.comments.map(comment =>
                        <div className="row">
                            <PostCommentComponent
                                userStatus={this.props.userStatus}
                                deleteComment={this.deleteComment}
                                currentCommenter={this.props.currentCommenter}
                                comment={comment}
                                postId={this.props.postId} />
                        </div>
                    )
                }
                <div className="input-group mb-3 post-input">
                    <input type="text" className="form-control"
                        placeholder="Comment"
                        value={this.state.commentInput}
                        onChange={(e) => {
                            this.setState({
                                commentInput: e.target.value
                            })
                        }}
                    />
                    <div className="input-group-append float-right">
                        <button className="btn btn-primary btn-sm" type="button"
                            onClick={() => {
                                CommentService.createComment(this.props.postId,
                                    {
                                        id: 0,
                                        postId: this.props.postId,
                                        commenterId: this.props.currentCommenter.id,
                                        text: this.state.commentInput
                                    }
                                ).then(() => this.renderComments())
                                this.setState({ commentInput: '' })
                            }}>
                            Post
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}