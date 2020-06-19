import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import CourseDetailsComponent from "./CourseDetailsComponent";
import CourseSearchComponent from "./CourseSearchComponent";
import NavBarComponent from "./NavBarComponent";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseTableComponent from "./CourseTableComponent";
import CourseRowComponent from "./CourseRowComponent";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import StudyGroupPageComponent from "./StudyGroupComponents/StudyGroupPageComponent";
import AdminStudyGroupComponent from "./AdminStudyGroupComponent";
import EditProfileComponent from "./ProfileComponents/EditProfileComponent";
import ProfileComponent from "./ProfileComponents/ProfileComponent";
import HomeComponent from "./HomeComponent";
import AdminProfileComponent from "./ProfileComponents/AdminProfileComponent";

class StudyGroupComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBarComponent/>
                    <Route
                        path="/"
                        exact={true}
                        component={HomeComponent}/>
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

                    <Route
                        path="/login"
                        exact={true}
                        component={LoginComponent}/>

                    <Route
                        path="/signup"
                        exact={true}
                        component={SignUpComponent}/>

                    <Route
                        path="/profile"
                        exact={true}
                        component={ProfileComponent}/>
                    <Route
                        path="/editProfile"
                        exact={true}
                        component={EditProfileComponent}/>
                    <Route
                        path="/admin/Profile"
                        exact={true}
                        component={AdminProfileComponent}/>

                    <Route
                    path="/group/"
                    exact={true}
                    component={StudyGroupPageComponent}/>

                    <Route
                        path="/group/:groupId"
                        exact={true}
                        component={StudyGroupPageComponent}/>

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