import React from "react";
import PostCommentComponent from "./PostCommentComponent";

export  default  class GroupPostComponent extends React.Component {
    state = {
        commentInputText: ""
    }
    render() {
        return (
            <div className="container card group-post group-card-body">
                <h5>{this.props.post.title}</h5>
                <p>{this.props.post.text}</p>
                <h5>Comments</h5>
                {this.props.post.comments.map(comment =>
                    <PostCommentComponent comment={comment}/>)}
                <div className="input-group mb-3 post-input">
                    <input type="text" className="form-control" placeholder="Comment"
                           onChange={(e) => this.setState({commentInputText: e.target.value})}
                    />
                        <div className="input-group-append">
                            <button className="btn btn-primary btn-sm" type="button"
                            >Post</button>
                        </div>
                </div>
            </div>
        )
    }
}