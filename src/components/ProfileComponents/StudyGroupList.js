import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GroupService from "../../services/GroupService";

class StudyGroupList extends React.Component {
    state = {
        list: this.props.list,
        currCourse: ''
    }

    getStudyGroupName = (groupId) => {
        GroupService.findGroupById(groupId)
        .then(group => this.setState({currCourse: group.courseName}))
    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {
                        this.state.list.map(group =>
                            <div>

                                {/*GroupService.findGroupById(group)*/}
                                {/*        .then(studyGroup => {*/}

                                {/*            this.setState({*/}
                                {/*                currGroup: studyGroup*/}
                                {/*            });*/}
                                {/*        })*/}


                                <button type="button"
                                    className="list-group-item list-group-item-action">
                                    {this.getStudyGroupName(group)}
                                    <span>
                                        {
                                            this.props.visiting &&
                                            <span>
                                                {this.state.currCourse}
                                            </span>

                                        }
                                        {
                                            !this.props.visiting &&
                                            <Link to={`/group/${group}`}
                                                className="mod-link">
                                                {this.state.currCourse}
                                            </Link>
                                        }

                                    </span>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default StudyGroupList