import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import CourseDetailsComponent from "./CourseDetailsComponent";
import CourseSearchComponent from "./CourseSearchComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";

class StudyGroupComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Study Group</h1>
                    <Route
                        path="/search"
                        exact={true}
                        component={CourseContainer} />

                    <Route
                        path='/search/:keyword'
                        exact={true}
                        component={CourseContainer} />

                    <Route path='search/:course_id/details/'
                        exact={true}
                        component={CourseDetailsComponent} />
                </div>
            </BrowserRouter>
        )
    }
}

export default StudyGroupComponent