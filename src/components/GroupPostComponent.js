import React from "react";
import PostCommentComponent from "./PostCommentComponent";

export  default  class GroupPostComponent extends React.Component {
    render() {
        return (
            <div className="container card group-post">
                <h5>Post Title</h5>
                Post text
                <h5>Comments</h5>
                <PostCommentComponent/>
                <PostCommentComponent/>
                <div className="input-group mb-3 post-input">
                    <input type="text" className="form-control" placeholder="Comment"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary btn-sm" type="button">Post</button>
                        </div>
                </div>
            </div>
        )
    }
}