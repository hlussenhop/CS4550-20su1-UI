import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import CourseDetailsComponent from "./CourseDetailsComponent";
import CourseSearchComponent from "./CourseSearchComponent";
import NavBarComponent from "./NavBarComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CourseTableComponent from "./CourseTableComponent";
import CourseRowComponent from "./CourseRowComponent";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import StudentStudyGroupComponent from "./StudentStudyGroupComponent";
import AdminStudyGroupComponent from "./AdminStudyGroupComponent";
import EditProfileComponent from "./EditProfileComponent";
import ProfileComponent from "./ProfileComponent";

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

                    <Route
                        path="/login"
                        exact={true}
                        component={LoginComponent} />

                    <Route
                        path="/signup"
                        exact={true}
                        component={SignUpComponent} />

                    <Route
                        path="/profile"
                        exact={true}
                        component={ProfileComponent} />
                    <Route
                        path="/editProfile"
                        exact={true}
                        component={EditProfileComponent} />

                        <Route
                            path="/student/group"
                            exact={true}
                            component={StudentStudyGroupComponent}/>

                    <Route
                        path="/admin/group"
                        exact={true}
                        component={AdminStudyGroupComponent}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default StudyGroupComponent