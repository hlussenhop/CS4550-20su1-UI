import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseSearchComponent from "../components/CourseSearchComponent";
import SearchService from "../services/SearchService"

export default class CourseContainer extends React.Component{
    state = {
        keyword: '',
        courses:[
            {course:"CS3500", title:"Object-Oriented Design", term:"Fall 2020", enrollment:"200"},
            {course:"CS4550", title: "Web Development", term:"Summer 1 2020", enrollment: "60"}
        ]
    }

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
                <h2>Course Search </h2>
                <CourseSearchComponent
                    keyword={this.state.keyword}
                    setKeyword={this.setKeyword}/>
                <CourseTableComponent
                    courses={this.state.courses}
                    keyword={this.state.keyword}/>
            </div>
        )
    }
}
