<<<<<<< HEAD
import React from 'react';
import { Link } from "react-router-dom";
import SearchService from "../services/SearchService"

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        // copy of parent course
        course: this.props.course
    }

    setEditing = (editing) =>
        this.setState({ editing: editing })

    ok = () =>
        SearchService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            // overriding
            course: {
                ...prevState.course,
                title: newTitle
            }
        }))

    render() {
        return (
            <tr className={this.state.editing ? 'table-primary' : ''}>
                <td>
                    {
                        !this.state.editing &&
                        // new string concatenation syntax
                        //<Link to={`/editor/${this.state.course._id}`}>
                        <Link to={`/editor/`}>
                            {this.state.course.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => this.updateCourseTitle(event.target.value)}
                            value={this.state.course.title} />
                    }
                </td>
                <td className="d-none d-sm-table-cell">{this.state.course.owner}</td>
                <td className="d-none d-md-table-cell">{this.state.course.modified}</td>
                <td>
                    {
                        !this.state.editing &&
                        <button className="btn btn-primary btn-sm"
                            onClick={() => this.setEditing(true)}>
                            <i class="fa-2x fa fa-pencil"></i>
                        </button>
                    }
                    {
                        this.state.editing &&
                        <span>
                            <button className="btn btn-primary btn-sm mr-2"
                                onClick={this.ok}>
                                <i class="fa-2x fa fa-check"></i>
                                </button>
                            <button className="btn btn-danger btn-sm"
                                // this.state.course does not work because it's a copy
                                // this.props.course is a reference
                                onClick={() => this.props.deleteCourse(this.props.course)}>
                                <i class="fa-2x fa fa-trash"></i>
                            </button>
                        </span>
                    }
=======
import React from "react";
import {Link} from "react-router-dom";
// // import CourseService from "../services/CourseService";
// import { faTrash, faFileAlt, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseRowComponent extends React.Component{

    state = {
        course: this.props.course
    }


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
                <td className="d-none d-lg-table-cell">{this.state.course.title}</td>
                <td className="d-none d-lg-table-cell">{this.state.course.term}</td>
                <td className="d-none d-lg-table-cell">{this.state.course.enrollment}</td>
                <td className="float-right">
                    <button className="btn btn-primary"
                            onClick={() => {}}>
                        DETAILS
                    </button>
                    <button className="btn btn-success"
                            onClick={() => {}}>
                        ENROLL
                    </button>
>>>>>>> 7d3fb8e43a0611c3b8aec2616f43321b2ad501da
                </td>
            </tr>
        )
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 7d3fb8e43a0611c3b8aec2616f43321b2ad501da
