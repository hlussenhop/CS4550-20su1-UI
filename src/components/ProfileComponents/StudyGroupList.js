import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GroupService from "../../services/GroupService";

class StudyGroupList extends React.Component {
    state = {
        list: [],
        currCourse: ''
    }

    componentDidMount() {
        this.getStudyGroups()
    }

    getStudyGroups = () => {
        this.props.list.map(group => GroupService.findGroupById(group)
            .then(group => this.setState({
                list: [
                    ...this.state.list,
                    group]
            })))
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
                                    <span>
                                        {
                                            this.props.visiting &&
                                            <span>
                                                {group.courseName}
                                            </span>

                                        }
                                        {
                                            !this.props.visiting &&
                                            <Link to={`/group/${group.id}`}
                                                className="mod-link">
                                                {group.courseName}
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