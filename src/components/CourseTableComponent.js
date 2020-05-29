<<<<<<< HEAD
import React from 'react';
import CourseRowComponent from '../components/CourseRowComponent'
=======
import React from "react";
import CourseRowComponent from "./CourseRowComponent";
>>>>>>> 7d3fb8e43a0611c3b8aec2616f43321b2ad501da

export default class CourseTableComponent extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className="d-none d-sm-table-cell">CRN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map(course =>
                                <CourseRowComponent
                                    key={course._id}
                                    course={course} />
                            )}
=======
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
>>>>>>> 7d3fb8e43a0611c3b8aec2616f43321b2ad501da
                    </tbody>
                </table>
            </div>
        )
    }
}