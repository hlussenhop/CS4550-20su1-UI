import React from "react";
import UserService from "../services/UserService";
import GroupService from "../services/GroupService";

export default class SectionCardComponent extends React.Component {
    groups = [];
    enrolled = false
    state = {
        user: {}
    };


    componentDidMount() {
        UserService.fetchProfile()
            .catch(e => { })
            .then(user => {
                this.setState({ user: user })
            })
    }

    addToStudyGroup(crn) {
        GroupService.findAllGroups()
            .then(groups => {
                    this.setState({groups: groups})
                    let wasPut = false
                    groups.map(group => {
                            if (group.courseId === crn) {
                                this.putInStudyGroup(group)
                                wasPut = true
                            }
                        }
                    )
                    if (wasPut === false) {
                        GroupService.createGroup({
                            courseId: parseInt(this.props.section.crn),
                            courseName: this.props.course.class.subject + '' + this.props.course.class.classId,
                            studentsInGroupIds: [
                                this.state.user.id
                            ],
                            postIds: []
                        }).then(
                            group => {
                                GroupService.findAllGroups()
                                    .then(groups => {
                                        groups.map(group => {
                                                if (group.courseId === crn) {
                                                    this.state.user.studyGroups.push(group.id)
                                                    console.log(group.id)
                                                    UserService.update(this.state.user.id, this.state.user)
                                                }
                                            }
                                        )
                                    })
                            }
                        )

                    }
                }
            )
    }

    putInStudyGroup(group) {
        if (!group.studentsInGroupIds.includes(this.state.user.id)) {
            group.studentsInGroupIds.push(this.state.user.id)
            this.state.user.studyGroups.push(group.id)
            GroupService.updateGroup(group.id, group)
            UserService.update(this.state.user.id, this.state.user)
        }
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card bg-light">
                    <div className="card-header"><b>CRN {this.props.section.crn}</b></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h6 className="card-text course-professor">Professor</h6>
                                <h6>Location</h6>
                                <h6>Enrollment</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="card-text text-muted">{this.props.section.profs[0]}</h6>
                                <h6 className="card-text course-location text-muted">{this.props.section.meetings[0].where}</h6>
                                <h6 className="card-text course-enrollment text-muted">{this.props.section.seatsCapacity - this.props.section.seatsRemaining
                                }</h6>
                                {this.state.user !== undefined &&
                                !this.enrolled &&
                                <button href="#" className="btn btn-success float-right card-link"
                                        onClick={() => {
                                            this.addToStudyGroup(parseInt(this.props.section.crn))
                                            alert("You are enrolled! Check your profile to access the group.")
                                        }}>
                                    Enroll
                                </button>
                                }
                                {this.state.user !== undefined &&
                                this.enrolled &&
                                <button href="#" className="btn btn-basic float-right card-link"
                                        onClick={() => {
                                            alert("You are already enrolled. Check your profile to access the group.")
                                        }}>
                                    Enrolled
                                </button>
                                }
                                {this.state.user === undefined &&
                                <button href="#" className="btn btn-success float-right card-link"
                                        onClick={() => alert("Sign in to enroll in a study group.")}>Enroll</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}