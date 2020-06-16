import React from "react";

export  default  class GroupCommentComponent extends React.Component {
    render() {
        return (
            <div className="container post-comment">
                <span className="post-comment-name">{this.props.comment.commenterName}</span>
                <p className="post-comment-text">
                    {this.props.comment.commentText}
                </p>

            </div>
        )
    }
}