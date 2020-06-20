import React from "react";
import UserService from "../services/UserService";
import PostService from "../services/PostService";
import CommentListComponent from "./StudyGroupComponents/CommentListComponent";
import RecentPostListComponent from "./ProfileComponents/RecentPostListComponent";

class HomeComponent extends React.Component {
    state = {
        currentUser: {},
        posts: []
    }

    componentDidMount() {
        UserService.fetchProfile()
            .catch(e => { })
            .then(user => {
                this.setState({ currentUser: user })
            })
        if (this.state.currentUser !== undefined) {
            PostService.findAllPosts().then(posts => {
                this.setState({ posts: this.filterPosts(posts) });

            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        UserService.fetchProfile()
            .catch(e => { })
            .then(user => {
                this.setState({ currentUser: user })
            })
        if(this.state.currentUser !== undefined) {
            PostService.findAllPosts().then(posts => {
                this.setState({ posts: this.filterPosts(posts) });
            })
        }
    }

    filterPosts = (posts) =>
        posts.filter(post => post)
        //(post.posterId === this.state.currentUser.id))



    render() {
        {
            console.log(this.state)
        }
        return (

            <div className="container">

                <h2>Study Group Web Application</h2>
                <p>Welcome To Group 11's final project. This is a webapp that
                allows users to join and participate in study groups for their section of a Notheastern
                    University course.</p>

                <p>After signing in you can enroll in a section and join it's study group by navigating to the courses
                search page by clicking the link on the navbar above, querying your course, clicking the details
                button, and then clicking the enroll button of the course.
                    You can access the group through your profile page</p>

                <p>Within a group you can write and edit your own posts, and also comment on other people's posts</p>

                <p>you may choose to sign up with the role of an admin, and admin has the power to edit any post,
                    and also remove students from study groups</p>
                {this.state.currentUser && this.state.posts.length !== 0 &&
                    <table className="container">
                        <thead>
                            <tr>
                                <th>
                                    Your Previous Posts
                        </th>
                            </tr>
                        </thead>
                        <tbody>

                                            <RecentPostListComponent user={this.state.currentUser}/>
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default HomeComponent