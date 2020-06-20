import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class FollowList extends React.Component {
    state = {
        list: this.props.list
    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {
                        this.state.list.map(element =>
                            <button type="button"
                                className="list-group-item list-group-item-action">
                                <span>
                                    <Link to={`/group/${element}`}
                                        className="mod-link">
                                        {element}
                                    </Link>
                                </span>
                            </button>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default FollowList