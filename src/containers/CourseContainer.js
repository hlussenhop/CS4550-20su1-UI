import React from "react";
import ReactDOM from 'react-dom'
import CourseTableComponent from '../components/CourseTableComponent'
import SearchService from "../services/SearchService";

class CourseContainer extends React.Component {
    state = {
        keyword: "",
        courses: []
    };

    keywordChanged = (event) =>
        this.setState({ keyword: event.target.value })

    findTerm = (keyword) => {
        SearchService.declareTerm(202060)
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
    /*
        componentDidMount() {
            //SearchService.declareTerm(202060)
            SearchService.findAllCourses()
                .then(actualArrayOfCourses =>
                    this.setState({
                        courses: actualArrayOfCourses
                    }))
        }
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.keyword !== this.props.match.params.keyword) {
            this.setState({
                keyword: this.props.match.params.keyword
            })
        }
    }

    setKeyword = (keyword) => {
        this.props.history.push(`/search/${keyword}`)
    }

    render() {
        return (
            <div>
                <h2>Course Search</h2>
                <div className="input-group">
                    <input className="form-control"
                        placeholder="keyword"
                        value={this.state.keyword}
                        onChange={this.keywordChanged} />
                    <div className="input-group-append">
                        <button className="btn btn-primary"
                            onClick={() => {
                                this.findTerm(this.state.keyword)
                            }}>
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    <CourseTableComponent
                        courses={this.state.courses}
                        keyword={this.state.keyword}
                        setKeyword={this.setKeyword} />
                </div>
            </div>
        )
    }
}

export default CourseContainer