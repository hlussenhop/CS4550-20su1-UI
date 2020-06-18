import React from "react";
import PostService from "../../services/PostService";
import GroupPostComponent from "./GroupPostComponent";
import PostCommentComponent from "./PostCommentComponent";
import CommentService from "../../services/CommentService";
import CommentListComponent from "./CommentListComponent";
import NewPostComponent from "./NewPostComponent";

export default class PostGridComponent extends React.Component {
    state = {
        posts: [],
        commentInput: "",
        isMakingNewPost: false
    };

    componentDidMount() {
        PostService.findPostsByStudyGroup(123)
            .then(posts => {
                {
                    console.log(this.props.groupId)
                }
                this.setState({posts: posts}
                )
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    changeIsMakingNewPost = (bool) => {
        this.setState({isMakingNewPost: bool})
    };

    makeNewPost = (post, bool) => {
        PostService.createPost(this.props.groupId, post)
        this.setState({isMakingNewPost: bool})
    }


    render() {
        return (
            <div className="container">
                {this.state.posts.map(post =>
                    <div className="container card group-post group-card-body">
                        <h5>{post.title}</h5>
                        <p>{post.text}</p>
                        <h5>Comments</h5>
                        {
                            <CommentListComponent currentCommenter={this.props.currentUser}
                                                  postId={post.id}/>
                        }
                    </div>
                )}
                {this.state.isMakingNewPost === false &&
                <button className="btn btn-success"
                        onClick={() => this.setState({isMakingNewPost: true})}>
                    newPost
                </button>
                }
                {this.state.isMakingNewPost === true &&
                    <NewPostComponent poster={this.props.currentUser}
                                      groupid={this.props.groupId}
                                      makeNewPost={this.makeNewPost}
                                      changeIsMakingNewPost={this.changeIsMakingNewPost}/>
                }
            </div>
        )
    }

}