import React from "react";
import {Link} from "react-router-dom";
import CourseDetailsComponent from "./CourseDetailsComponent";
// // import CourseService from "../services/CourseService";

export default class CourseRowComponent extends React.Component{
/*
    getDetails = () => 
        SearchService.getDetails(this.state.course)
*/
    render() {
        return (
            <tr className="course-row">
                <td className="">{this.props.course["class"]["subject"] + this.props.course["class"]["classId"]}</td>
                <td className="d-none d-md-table-cell">{this.props.course["class"]["name"]}</td>
                <td className="float-right">
                    <Link to={{ pathname: '/details/' + this.props.course.class.classId,
                    state: {
                        course: this.props.course
                    }}}>
                        <button className="btn btn-primary"
                                onClick={() => {}}>
                            DETAILS
                        </button>
                    </Link>
                </td>
            </tr>
        )
    }
}