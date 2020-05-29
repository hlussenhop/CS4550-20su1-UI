import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseTableComponent extends React.Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-light">
                    <thead>
                    <tr className="table-secondary">
                        <th className="course-header course-owner d-none d-md-table-cell">Course</th>
                        <th className="course-header course-title">Title</th>
                        {/*<th className="course-header d-none d-lg-table-cell">CRN</th>*/}
                        <th className="course-header d-none d-lg-table-cell">Term</th>
                        {/*<th className="course-header d-none d-lg-table-cell">Instructors</th>*/}
                        <th className="course-header d-none d-lg-table-cell">Enrollment</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRowComponent
                                course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}