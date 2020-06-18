import React from "react";

export  default  class GroupCommentComponent extends React.Component {
    render() {
        return (
            <div className="container post-comment">
                <span className="post-comment-name">Commenter Name</span>
                <span className="post-comment-time">11:00</span>
                <p className="post-comment-text">
                    This is the text of a comment
                </p>

            </div>
        )
    }
}