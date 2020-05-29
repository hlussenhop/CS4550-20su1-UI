import React from 'react';
import CourseContainer from '../containers/CourseContainer'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class StudyGroupComponent extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h1>Study Group</h1>
                    <Link className="btn btn-primary" to="/search">Search for courses</Link>
                    <Route
                        path="/search"
                        exact={true}
                        component={CourseContainer} />

                    <Route
                        path='/search/:keyword'
                        exact={true}
                        component={CourseContainer} />
                </div>
            </Router>
        )
    }
}

export default StudyGroupComponent