import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import CourseDetailsComponent from "./CourseDetailsComponent";
import CourseSearchComponent from "./CourseSearchComponent";
import NavBarComponent from "./NavBarComponent";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseTableComponent from "./CourseTableComponent";
import CourseRowComponent from "./CourseRowComponent";
import StudentStudyGroupComponent from "./StudentStudyGroupComponent";
import AdminStudyGroupComponent from "./AdminStudyGroupComponent";

class StudyGroupRoutesComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBarComponent/>
                    <Route
                        path="/search"
                        exact={true}
                        component={CourseContainer}/>

                    <Route
                        path='/search/:term/:subject'
                        exact={true}
                        component={CourseContainer}/>

                    <Route path='/details/:id'
                           exact={true}
                           render={(props) => <CourseRowComponent {...props} someProp={100}/>}
                           component={CourseDetailsComponent}/>

                    <Route path='/student/group'
                           exact={true}
                           component={StudentStudyGroupComponent}/>

                    <Route path='/admin/group'
                           exact={true}
                           component={AdminStudyGroupComponent}/>
                </div>
            </BrowserRouter>
    )
    }
    }

    export default StudyGroupRoutesComponent