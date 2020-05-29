import React from 'react';
import CourseRowComponent from '../components/CourseRowComponent'

export default class CourseTableComponent extends React.Component {
    render() {
        return (
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
                    </tbody>
                </table>
            </div>
        )
    }
}