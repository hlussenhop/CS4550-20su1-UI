import React from "react";
import SectionCardComponent from "./SectionCardComponent";

export default class CourseDetailsComponent extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="card-header">
                        <h5>
                            <b>{this.props.location.state.course.class.name}</b>
                        </h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.location.state.course.class.desc}
                        </p>
                    </div>
                </div>

                <p1><b>Sections</b></p1>
                <div className="row row-cols-1 row-cols-md-2">
                    {
                        this.props.location.state.course.sections.map(section =>
                            <span>
                                <SectionCardComponent
                                    section={section}/>
                            </span>
                        )

                    }

                </div>

            </div>
        )
    }
}
