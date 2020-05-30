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
<<<<<<< HEAD
                <td className="d-none d-md-table-cell">Not Enrolled</td>
                <td className="d-none d-lg-table-cell">&nbsp;</td>
=======
                <td className="d-none d-md-table-cell">&nbsp;</td>
>>>>>>> 8f99e8a0da725e054cc4826e63847c7a8d614781
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
                    {/*<button className="btn btn-success"*/}
                    {/*        onClick={() => {}}>*/}
                    {/*    ENROLL*/}
                    {/*</button>*/}
                </td>
            </tr>
        )
    }
}