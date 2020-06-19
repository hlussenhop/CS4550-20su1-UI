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
        PostService.findPostsByStudyGroup(this.props.groupId)
            .then(posts => {
                this.setState({posts: posts})
            })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    makeNewPost = (post, bool) => {
        PostService.createPost(this.props.groupId, post)
        this.setState({isMakingNewPost: bool})
        PostService.findPostsByStudyGroup(this.props.groupId)
            .then(posts => {
                this.setState({posts: posts})
            })

    };

    renderPosts = () =>
        PostService.findPostsByStudyGroup(this.props.groupId)
            .then(posts => {
                this.setState({posts: posts})
            })




    render() {
        return (
            <div className="container">
                {console.log(this.props.currentUser)}
                {this.state.posts.map(post =>
                    <GroupPostComponent userstatus={this.props.userStatus}
                        renderPosts={this.renderPosts}
                        currentUser={this.props.currentUser} post={post}/>
                )}
                {this.state.isMakingNewPost === false && this.props.userStatus !== "ANON" &&
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