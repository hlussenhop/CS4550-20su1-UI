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
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                    <input type="search" placeholder="Search Courses"
                        onChange={(event) =>
                            this.props.setKeyword(event.target.value)}
                        aria-describedby="button-addon1"
                        className="form-control border-0 bg-light" />
                    <div className="input-group-append">
                        <button id="button-addon1"
                            type="submit" className="btn btn-link text-primary"
                            onClick={() => this.findTerm(this.props.keyword)}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseSearchComponent