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
                                    <Link to={`/group/${group}`}
                                        className="mod-link">
                                        {group}
                                    </Link>
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