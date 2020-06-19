import React from "react";
import UserService from "../services/UserService";
import GroupService from "../services/GroupService";

export default class SectionCardComponent extends React.Component {
    groups = [];
    state = {
        user: null
    };


    componentDidMount() {
        try {
            UserService.fetchProfile()
                .then(user => this.setState({ user: user }))
        } catch (err) {
            this.setState({ user: null })
        }
    }

    addToStudyGroup(crn) {
        GroupService.findAllGroups()
            .then(groups => {
                this.setState({ groups: groups })
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
                        currentUserId: 1,
                        studentsInGroupIds: [
                            this.state.user.id
                        ],
                        postIds: []
                    })

                }
            }
            )
    }

    putInStudyGroup(group) {
        if (!group.studentsInGroupIds.includes(this.state.user.id)) {
            group.studentsInGroupIds.push(this.state.user.id)
            GroupService.updateGroup(group.id, group)
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
                                {this.state.user !== null &&
                                    !this.enrolled &&
                                    <button href="#" className="btn btn-success float-right card-link"
                                        onClick={() => {
                                            this.addToStudyGroup(parseInt(this.props.section.crn))
                                            alert("You are enrolled! Check your profile to access the group.")
                                        }}>
                                        Enroll
                                </button>
                                }
                                {this.state.user !== null &&
                                    this.enrolled &&
                                    <button href="#" className="btn btn-basic float-right card-link"
                                        onClick={() => {
                                            alert("You are already enrolled. Check your profile to access the group.")
                                        }}>
                                        Enrolled
                                </button>
                                }
                                {this.state.user === null &&
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