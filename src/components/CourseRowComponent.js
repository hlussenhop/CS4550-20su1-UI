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
                <td>{this.props.course["class"]["subject"] + this.props.course["class"]["classId"]}</td>
                <td className="d-none d-sm-table-cell">{this.props.course["class"]["name"]}</td>
                <td className="d-none d-lg-table-cell">Not Enrolled</td>
                <td className="float-right">
                    <Link to={`/details/`}>
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