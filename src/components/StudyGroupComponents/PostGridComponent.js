import React from "react";
import PostService from "../../services/PostService";
import GroupPostComponent from "./GroupPostComponent";
import NewPostComponent from "./NewPostComponent";

export default class PostGridComponent extends React.Component {
    state = {
        posts: [],
        count: 0,
        commentInput: "",
        isMakingNewPost: false
    };

    componentDidMount() {
        PostService.findPostsByStudyGroup(this.props.groupId)
            .then(posts => {
                this.setState({ 
                    posts: posts,
                    count: posts.length
                })
            })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            PostService.findPostsByStudyGroup(this.props.groupId)
            .then(posts => {
                this.setState({ 
                    posts: posts,
                    count: posts.length})
            })
        }
    }

    makeNewPost = (post, bool) => {
        PostService.createPost(this.props.groupId, post).then(() => {
            this.setState({ isMakingNewPost: bool })
            PostService.findPostsByStudyGroup(this.props.groupId)
                .then(posts => {
                    this.setState({ 
                        posts: posts,
                        count: posts.length})
                })
        })


    };

    renderPosts = () => {
        PostService.findPostsByStudyGroup(this.props.groupId)
            .then(posts => {
                this.setState({ 
                    posts: posts,
                    count: posts.length})
            })
    }

    render() {
        return (
            <div className="container mt-2">
                {this.state.posts.map(post =>
                    <GroupPostComponent userstatus={this.props.userStatus}
                        renderPosts={this.renderPosts}
                        currentUser={this.props.currentUser} 
                        post={post}
                        groupId={this.props.groupId} />
                )}
                {this.state.isMakingNewPost === false && this.props.userStatus !== "ANON" &&
                    <button className="btn btn-success float-right"
                        onClick={() => this.setState({ isMakingNewPost: true })}>
                        New Post
                </button>
                }
                {this.state.isMakingNewPost === true &&
                    <NewPostComponent poster={this.props.currentUser}
                        groupid={this.props.groupId}
                        makeNewPost={this.makeNewPost}
                        changeIsMakingNewPost={this.changeIsMakingNewPost} />
                }
            </div>
        )
    }

}