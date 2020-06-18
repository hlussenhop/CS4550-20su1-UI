import React from "react";
import CommentService from "../../services/CommentService";
import UserService from "../../services/UserService";

export default class GroupCommentComponent extends React.Component {
    state= {
        user: {}
    };

    componentDidMount() {
        UserService.getUserById(this.props.comment.commenterId)
            .then(user => this.setState({user: user}))
    }

    render() {
        return (
            <div className="container post-comment">
                <span className="post-comment-name">
                    {
                    this.state.user.firstName
                }
                </span>

                <p className="post-comment-text">
                    {
                        this.props.comment.text
                    }
                </p>
            </div>
        )
    }
}