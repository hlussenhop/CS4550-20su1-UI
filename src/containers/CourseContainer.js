import React from "react";
import CourseTableComponent from "../components/CourseSearchComponents/CourseTableComponent";
import CourseSearchComponent from "../components/CourseSearchComponents/CourseSearchComponent";
import SearchService from "../services/SearchService"

export default class CourseContainer extends React.Component {
    state = {
        subject: 'cs',
        term: '202110',
        courseNumber: "",
        courses: []
        //{ course: "CS3500", title: "Object-Oriented Design", term: "Fall 2020", enrollment: "200" },
        //{ course: "CS4550", title: "Web Development", term: "Summer 1 2020", enrollment: "60" }
    };

    componentDidMount() {
        if ((this.state.subject !== "") && (this.state.term !== "")) {
            SearchService.findCoursesBySubject(this.state.subject, this.state.term)
                .then(actualArrayOfCourses =>
                    this.setState({
                        courses: actualArrayOfCourses
                    }))
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.match.params.subject !== this.props.match.params.subject)
            || prevProps.match.params.term !== this.props.match.params.term || prevProps.match.params.courseNumber
            !== this.props.match.params.courseNumber) {
            this.setState({
                subject: this.props.match.params.subject,
                term: this.props.match.params.term
            })
        }
    }

    findTerm = () => {
        SearchService.findCoursesBySubject(this.state.subject, this.state.term)
            .then(coursesFound => {
                if (this.state.courseNumber === "") {
                    this.setState({
                        courses: coursesFound
                    })
                } else {
                    coursesFound = coursesFound.filter(course => {
                        return course.class.classId === this.state.courseNumber
                    });

                }
                this.setState({
                    courses: coursesFound
                })

            })
    };

    setTerm = (term) => {
        this.setState({
            term: term
        })
    };

    setSubject = (subject) => {
        this.setState({
            subject: subject
        })
    };

    setCourseNumber = (number) => {
        this.setState({
            courseNumber: number
        });
    };

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

    setURL = () => {
        this.props.history.push(`/search/${this.state.term}/${this.state.subject}`)
    };

    render() {
        return (
            <div>
                <h2>Course Search </h2>
                <CourseSearchComponent
                    findTerm={this.findTerm}
                    term={this.state.term}
                    subject={this.state.subject}
                    setTerm={this.setTerm}
                    setSubject={this.setSubject}
                    setURL={this.setURL}
                    setCourseNumber={this.setCourseNumber}
                />
                <CourseTableComponent
                    courses={this.state.courses}/>
            </div>
        )
    }
}
