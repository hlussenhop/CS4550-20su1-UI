import React from "react";

export default class SectionCardComponent extends React.Component{
    render() {
        console.log(this.props)
        return (

            <div className="col mb-4">
                <div className="card bg-light">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-10">
                                <b>CRN {this.props.section.crn}</b>
                            </div>
                            <div className="col-2">
                                <button href="#" className="btn btn-success float-right card-link">Enroll</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h6 className="card-text course-professor">Professor</h6>
                                <h6 className="card-text course-time">Times</h6>
                                <h6 className="card-text course-days">Days</h6>
                                <h6>Location</h6>
                                <h6>Enrollment</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="card-text text-muted">{this.props.section.profs[0]}</h6>
                                <h6 className="card-text course-time text-muted">9:50am-11:30pm</h6>
                                <h6 className="card-text course-days text-muted">Tuesday, Friday</h6>
                                <h6 className="card-text course-location text-muted">{this.props.section.meetings[0].where}</h6>
                                <h6 className="card-text course-enrollment text-muted">{this.props.section.seatsCapacity - this.props.section.seatsRemaining
                                }</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}