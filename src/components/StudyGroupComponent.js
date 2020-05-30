import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import CourseDetailsComponent from "./CourseDetailsComponent";
import CourseSearchComponent from "./CourseSearchComponent";
import NavBarComponent from "./NavBarComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CourseTableComponent from "./CourseTableComponent";
import CourseRowComponent from "./CourseRowComponent";

class StudyGroupComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBarComponent />
                    <Route
                        path="/search"
                        exact={true}
                        component={CourseContainer} />

                    <Route
                        path='/search/:term/:subject'
                        exact={true}
                        component={CourseContainer} />

                    <Route path='/details/:id'
                        exact={true}
                        render={(props) => <CourseRowComponent {...props} someProp={100} />}
                        component={CourseDetailsComponent} />
                </div>
            </BrowserRouter>
        )
    }
}

export default StudyGroupComponent