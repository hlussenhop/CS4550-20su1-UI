import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseTableComponent extends React.Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-light">
                    <thead>
                    <tr className="table-secondary">
                        <th className="course-header course-owner">Course</th>
                        <th className="course-header d-none d-sm-table-cell course-title">Title</th>
                        {/*<th className="course-header d-none d-lg-table-cell">CRN</th>*/}
                        {/*<th className="course-header d-none d-lg-table-cell">Instructors</th>*/}
                        <th className="course-header d-none d-md-table-cell">Enrollment</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRowComponent key={course["class"]["subject"] + course["class"]["classId"]}
                                course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}