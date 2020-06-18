import React from "react";
import PostCommentComponent from "./PostCommentComponent";
import PostService from "../../services/PostService";
import CommentListComponent from "./CommentListComponent";

export default class GroupPostComponent extends React.Component {
    state = {
        commentInputText: "",
        isBeingEdited: false,
        editingTitle: "",
        editingBody: ""

    };

    changePost = () => {
        console.log("work");
        PostService.updatePost(this.props.post.id,
            {
                studyGroupId: 123,
                posterId: 1,
                title: this.state.editingTitle,
                text: this.state.editingBody
            })

    }


    render() {
        return (
            <div className="container card group-post group-card-body">
                {this.state.isBeingEdited === false &&
                <div>
                    <h5>{this.props.post.title}</h5>
                    <p>{this.props.post.text}</p>
                    <button className="btn btn-primary"
                            onClick={() => this.setState({isBeingEdited: true})}>Edit Post
                    </button>
                    <h5>Comments</h5>
                    {
                        <CommentListComponent currentCommenter={this.props.currentUser}
                                              postId={this.props.post.id}/>
                    }
                </div>
                }
                {this.state.isBeingEdited === true &&
                <div>
                    <h5>{this.props.post.title}</h5>
                    <p>{this.props.post.text}</p>
                    <input type="text"
                           className="form-control"
                           placeholder="New Title"
                           onChange={(e) =>
                               this.setState({editingTitle: e.target.value})}/>
                    <textarea className="form-control"
                              placeholder="New Body"
                              onChange={(e) =>
                                  this.setState({editingBody: e.target.value})}/>
                    <div className="btn-group">
                        <button className="btn btn-primary"
                                onClick={() => {
                                    this.changePost();
                                    this.setState({editingTitle: "", editingBody: ""});
                                    this.setState({isBeingEdited: false})
                                    this.props.renderPosts()
                                }}>Save
                        </button>
                        <button className="btn btn-danger"
                                onClick={() => PostService.deletePost(this.props.post.id).then(this.props.renderPosts)}>Delete Post</button>
                    </div>
                    {
                        <CommentListComponent currentCommenter={this.props.currentUser}
                                              postId={this.props.post.id}/>
                    }
                </div>
                }

            </div>
        )
    }
}