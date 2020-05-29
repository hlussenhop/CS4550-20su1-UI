import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseSearchComponent from "../components/CourseSearchComponent";

export default class CourseContainer extends React.Component{
    state = {
        courses:[
            {course:"CS3500", title:"Object-Oriented Design", term:"Fall 2020", enrollment:"200"},
            {course:"CS4550", title: "Web Development", term:"Summer 1 2020", enrollment: "60"}
        ]
    }

    render() {
        return (
            <div className="container">
                <h2>Course Search </h2>
                <CourseSearchComponent/>
                <CourseTableComponent
                    courses={this.state.courses}/>
            </div>
        )
    }

}
