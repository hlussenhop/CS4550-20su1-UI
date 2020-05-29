import React from "react";

import SearchService from '../services/SearchService'

class CourseSearchComponent extends React.Component {
    findTerm = (keyword) => {
        console.log(SearchService.findAllCourses())
        /*
        SearchService.findTerm(keyword)
            .then(theActualNewCourse =>
                this.setState((prevState) => {
                    return {
                        courses: [
                            ...prevState.courses,
                            theActualNewCourse
                        ]
                    }
                }))
                */
    }

    render() {
        return (

            // <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            //     <div className="input-group">
            //         <input type="search" placeholder="Search Courses"
            //             onChange={(event) =>
            //                 this.props.setKeyword(event.target.value)}
            //             aria-describedby="button-addon1"
            //             className="form-control border-0 bg-light" />
            //         <div className="input-group-append">
            //             <button id="button-addon1"
            //                 type="submit" className="btn btn-link text-primary"
            //                 onClick={() => this.findTerm(this.props.keyword)}>
            //                 <i className="fa fa-search"></i>
            //             </button>
            //         </div>
            //     </div>
            // </div>

            // <div className="dropdown">
            //     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
            //             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //         Select Course
            //     </button>
            //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //         <a className="dropdown-item" href="#">Action</a>
            //         <a className="dropdown-item" href="#">Another action</a>
            //         <a className="dropdown-item" href="#">Something else here</a>
            //     </div>
            // </div>
            <div className=" form-group row">
                <div className="col-5">
                    <div className="form-inline row">
                        <div className="col-6">
                            <label htmlFor="subjectFld" className="col-form-label float-left">Select Subject: </label>
                        </div>
                        <div className="col-6">
                        <select className="form-control"
                                id="subjectFld">
                            <option>ARTH</option>
                            <option>BIOL</option>
                            <option>CHEM</option>
                            <option>CIVE</option>
                            <option>COMM</option>
                            <option>CRIM</option>
                            <option>CS</option>
                            <option>ECON</option>
                            <option>EECE</option>
                            <option>ENGL</option>
                            <option>ENVR</option>
                            <option>HIST</option>
                            <option>MATH</option>
                            <option>MUSC</option>
                            <option>PHIL</option>
                            <option>PHMD</option>
                            <option>PHYS</option>
                            <option>POLS</option>
                            <option>PSYC</option>
                            <option>THTR</option>
                            <option>SOCL</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="form-inline">
                        <div className="col-6">
                            <label htmlFor="subjectFld" className="col-form-label float-left">Select Term: </label>
                        </div>
                        <div className="col-6">
                            <select className="form-control"
                                    id="subjectFld">
                                <option>Summer 1 2020</option>
                                <option>Summer 2 2020</option>
                                <option>Fall 2020</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-success float-right"
                            onClick={() => {}}>
                        SUBMIT
                    </button>
                </div>
            </div>
        )
    }
}

export default CourseSearchComponent