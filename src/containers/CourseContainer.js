import React from "react";
<<<<<<< HEAD
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
=======
import CourseTableComponent from "../components/CourseTableComponent";
import CourseSearchComponent from "../components/CourseSearchComponent";

export default class CourseContainer extends React.Component{
    state = {
        courses:[
            {course:"CS3500", title:"Object-Oriented Design", term:"Fall 2020", enrollment:"200"},
            {course:"CS4550", title: "Web Development", term:"Summer 1 2020", enrollment: "60"}
        ]
>>>>>>> 7d3fb8e43a0611c3b8aec2616f43321b2ad501da
    }

    render() {
        return (
<<<<<<< HEAD
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
=======
            <div className="container">
                <h2>Course Search </h2>
                <CourseSearchComponent/>
                <CourseTableComponent
                    courses={this.state.courses}/>
>>>>>>> 7d3fb8e43a0611c3b8aec2616f43321b2ad501da
            </div>
        )
    }
}
