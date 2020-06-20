import React from "react";
import CommentService from "../../services/CommentService";
import PostCommentComponent from "./PostCommentComponent";

export default class CommentListComponent extends React.Component {
    state = {
        comments: [],
        commentInput: ""
    };

    componentDidMount() {
        CommentService.findCommentsForPost(this.props.postId)
            .then(comments => this.setState({comments: comments}))
    }

    updateComments() {
        CommentService.findCommentsForPost(this.props.postId)
            .then(comments => this.setState({comments: comments}))
    }

    render() {
        return (
            <div className="col">
                {
                    this.state.comments.map(comment =>
                        <div className="row">
                            <PostCommentComponent comment={comment}/>
                        </div>
                    )
                }
                <div className="input-group mb-3 post-input">
                    <input type="text" className="form-control" placeholder="Comment"
                           onChange={(e) => {
                               this.setState({
                                   commentInput: e.target.value
                               })
                           }}
                    />
                </div>
                <div className="input-group-append">
                    <button className="btn btn-primary btn-sm" type="button"
                            onClick={() => {
                                const newId = Math.random * 1000;

                                CommentService.createComment(this.props.postId,
                                    {id: newId, postId: this.props.postId,
                                        commenterId: this.props.currentCommenter.id, text: this.state.commentInput}
                                ).then(() => this.updateComments())
                                }}>
                        Post
                    </button>
                </div>
            </div>
        )
    }
}