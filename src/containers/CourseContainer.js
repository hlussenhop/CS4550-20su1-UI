import React from "react";

class CourseContainer extends React.component{
    state = {
        courses:[]
    }

    render() {
        return (
            <h2> course Search </h2>
            <CourseTableComponent/>
        )
    }

}

export default CourseContainer