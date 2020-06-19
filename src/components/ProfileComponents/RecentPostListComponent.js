import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class RecentPostListComponent extends React.Component {
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
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{element.course}</h5>
                                        <small>{element.date}</small>
                                    </div>
                                    <p className="mb-1">{element.text}</p>
                                    <small>
                                        <Link to={'/group'}>
                                            Go to Post
                                        </Link>
                                    </small>
                                </button>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default RecentPostListComponent