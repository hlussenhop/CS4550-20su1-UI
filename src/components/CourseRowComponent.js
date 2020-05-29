import React from "react";
import {Link} from "react-router-dom";
import CourseDetailsComponent from "./CourseDetailsComponent";
// // import CourseService from "../services/CourseService";

export default class CourseRowComponent extends React.Component{

    state = {
        course: this.props.course
    }
/*
    getDetails = () => 
        SearchService.getDetails(this.state.course)
*/
    render() {
        return (

            <tr className="course-row"> {/*onClick={() => }>*/}
                <td>
                    {/*{*/}
                    {/*    !this.state.editing &&*/}
                    {/*    // <Link to={`/editor/${this.state.course._id}`}>*/}
                    {/*    //     <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>*/}
                    {/*    //     <span className="link"> {this.state.course.title} </span>*/}
                    {/*    // </Link>*/}
                        <span className="link"> {this.state.course.course} </span>

                    {/*}*/}
                </td>
                <td className="d-none d-sm-table-cell">{this.state.course.title}</td>
                <td className="d-none d-md-table-cell">{this.state.course.term}</td>
                <td className="d-none d-lg-table-cell">{this.state.course.enrollment}</td>
                <td className="float-right">
                    <Link to={'/details/'}>
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