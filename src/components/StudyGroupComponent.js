import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import CourseDetailsComponent from "./CourseDetailsComponent";
import NavBarComponent from "./NavBarComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";

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

                    <Route path='search/:term/:subject/:classId/details'
                        exact={true}
                        component={CourseDetailsComponent} />

                    {/*For test*/}
                    <Route path='/details/'
                        exact={true}
                        component={CourseDetailsComponent} />
                </div>
            </BrowserRouter>
        )
    }
}

export default StudyGroupComponent