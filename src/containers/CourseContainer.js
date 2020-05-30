import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseSearchComponent from "../components/CourseSearchComponent";
import SearchService from "../services/SearchService"

export default class CourseContainer extends React.Component {
    state = {
        subject: 'cs',
        term: 202110,
        keyword: '',
        courses: []
            //{ course: "CS3500", title: "Object-Oriented Design", term: "Fall 2020", enrollment: "200" },
            //{ course: "CS4550", title: "Web Development", term: "Summer 1 2020", enrollment: "60" }
    }

    findTerm = () => {
        SearchService.findCoursesBySubject(this.state.subject, this.state.term)
            .then(coursesFound =>
                this.setState({
                    courses: coursesFound
                }))
    }

    setTerm = (term) => {
        this.setState({
            term: term
        })
    }

    setSubject = (subject) => {
        this.setState({
            subject: subject
        })
    }

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

    componentDidMount() {
        SearchService.findCourseByKeyword(this.state.subject, this.state.term)
            .then(actualArrayOfCourses =>
                this.setState({
                    courses: actualArrayOfCourses
                }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.keyword !== this.props.match.params.keyword) {
            this.setState({
                keyword: this.props.match.params.keyword
            })
        }
    }

    setKeyword = (keyword, term) => {
        this.props.history.push(`/search/${term}/${keyword}`)
    }

    render() {
        return (
            <div>
                <h2>Course Search </h2>
                <CourseSearchComponent
                    findTerm={this.findTerm}
                    term={this.state.term}
                    subject={this.state.subject}
                    setTerm={this.setTerm}
                    setSubject={this.setSubject}/>
                <CourseTableComponent
                    courses={this.state.courses} />
            </div>
        )
    }
}
