import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class PendingRequestsComponent extends React.Component {
    state = {
        requests: this.props.list
    }

    approveRequest = () => {

    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {

                        this.state.requests.map(request =>
                            <button type="button"
                                    className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <div>
                                        <h5 className="mb-1">
                                            <Link to={"/profile"}>
                                                {request.user}
                                            </Link>
                                        </h5>
                                        <small>{request.date}</small>
                                    </div>
                                    <button className="btn btn-primary float-right"
                                            onClick={() => this.approveRequest(request.user)}>
                                        APPROVE
                                    </button>
                                </div>

                            </button>

                        )
                    }
                </div>
            </div>
        )
    }
}

export default PendingRequestsComponent