import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PostService from "../../services/PostService";

class RecentPostListComponent extends React.Component {
    state = {
        recentPosts: []
    }

    componentDidMount() {
        PostService.findAllPosts()
            .then(posts => {
                this.setState({ recentPosts: posts.filter(post => post.posterId === this.props.user.id) });
            })
    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {

                        this.state.recentPosts.map(post =>
                            <button type="button"
                                className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{post.title}</h5>
                                    {/*<small>{element.date}</small>*/}
                                </div>
                                <p className="mb-1">{post.text}</p>
                                <small>
                                    <Link to={`/group/${post.studyGroupId}`}>
                                        Go to Post
                                        </Link>
                                </small>
                            </button>
                        ).slice(0, 5)
                    }
                </div>
            </div>
        )
    }
}

export default RecentPostListComponent