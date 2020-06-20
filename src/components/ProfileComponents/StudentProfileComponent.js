import React from "react";
import StudyGroupList from "./StudyGroupList";
import RecentPostListComponent from "./RecentPostListComponent";

class StudentProfileComponent extends React.Component {

    state = {
        followers: [this.user, this.user],
        following: [this.user, this.user, this.user],
        courseList: [this.course, this.course],
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
                    <div>
                        <h5 className="profile-heading">Study Groups:</h5>
                        <StudyGroupList list={this.state.currentUser.studyGroups}
                        visiting={this.props.visiting}/>
                    </div>
                    <br/>
                    {
                        !this.props.visiting &&
                        <div>
                            <h5 className="profile-heading">Your Recent Posts:</h5>
                            <RecentPostListComponent user={this.state.currentUser}/>
                        </div>
                    }

                </div>
            </div>
        )
    }

}

export default StudentProfileComponent