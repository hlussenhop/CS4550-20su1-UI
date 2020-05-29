import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CourseContainer from "../containers/CourseContainer";
import CourseDetailsComponent from "./CourseDetailsComponent";

class StudyGroup extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>

                    <Route path='/'
                           exact={true}
                           component={CourseContainer}/>

                    <Route path='/details/'
                           exact={true}
                           component={CourseDetailsComponent}/>

                </BrowserRouter>
            </div>
        )
    }
}

export default StudyGroup