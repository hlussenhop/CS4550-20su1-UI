import React from "react";
import {Link} from "react-router-dom";
import FollowList from "./FollowList";
import RecentPostListComponent from "./RecentPostListComponent";
import UserService from "../../services/UserService"

class StudentProfileComponent extends React.Component{

    post = {
        course: 'CS4910',
        title: 'Hello',
        text: "Join my study group! :)",
        date: 'June 17, 2020'
    }

    state = {
        followers: [this.user, this.user],
        following: [this.user, this.user, this.user],
        courseList: [this.course, this.course],
        recentPosts: [this.post, this.post, this.post, this.post],
        currentUser: this.props.currentUser
    }

    // componentDidMount() {
    //     UserService.fetchProfile()
    //         .catch(e => { })
    //         .then(currentUser => {
    //             if (currentUser) {
    //                 this.setState({ currentUser: currentUser })
    //             }
    //         })
    // }

    render() {
        return (
            <div>

                <div className="profile">


                    {/*<div className="row">*/}
                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Following</h5>*/}
                    {/*        <FollowList list={this.state.followers}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Followers</h5>*/}
                    {/*        <FollowList list={this.state.following}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Courses</h5>*/}
                    {/*        <FollowList list={this.state.courseList}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    <div>
                        <h5 className="profile-heading">Study Groups:</h5>
                        <FollowList list={this.state.currentUser.studyGroups}/>
                    </div>
                    <br/>
                    <div>
                        <h5 className="profile-heading">Recent Posts:</h5>
                        <RecentPostListComponent list={this.state.recentPosts}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default StudentProfileComponent