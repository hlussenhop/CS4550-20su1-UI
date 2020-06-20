import React from "react";
import StudyGroupList from "./StudyGroupList";
import RecentPostListComponent from "./RecentPostListComponent";


class AdminProfileComponent extends React.Component {

    pendingRequest = {
        // user: 'calbee',
        id: 992199446,
        date: 'June 18, 2020'
    }

    state = {
        followers: [this.user, this.user],
        following: [this.user, this.user, this.user],
        courseList: [this.course, this.course],
        pendingRequests: [this.pendingRequest, this.pendingRequest, this.pendingRequest],
        studyGroups: this.props.studyGroups,
        currentUser: this.props.currentUser
    }

    render() {
        return (
            <div>


                <div className="profile">


                    {/*<div className="row">*/}
                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Following</h5>*/}
                    {/*        <StudyGroupList list={this.state.followers}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Followers</h5>*/}
                    {/*        <StudyGroupList list={this.state.following}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Courses</h5>*/}
                    {/*        <StudyGroupList list={this.state.courseList}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h5 className="profile-heading">Pending Requests to Study Group: {this.studyGroup.name}</h5>*/}
                    {/*    <PendingRequestsComponent list={this.state.pendingRequests}/>*/}
                    {/*</div>*/}
                    <div>
                        <h5 className="profile-heading">Study Groups:</h5>
                        <StudyGroupList list={this.state.studyGroups}
                                        visiting={this.props.visiting}/>
                    </div>
                    <br/>
                    {
                        !this.props.visiting &&
                        <div>
                            <h5 className="profile-heading">Your Recent Posts:</h5>
                            <RecentPostListComponent user={this.props.currentUser}/>
                        </div>
                    }


                </div>
            </div>


        )
    }

}

export default AdminProfileComponent