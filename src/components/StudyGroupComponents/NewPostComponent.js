import React from "react";

export default class NewPostComponent extends React.Component {
    state = {
        id: 0,
        studyGroupId: this.props.groupid,
        posterId: this.props.poster.id,
        title: "",
        text: "",
        commentIds: []
    };

    changeTitle = (title) => {
        this.setState({ title: title })
    };

    changeText = (text) => {
        this.setState({ text: text })
    };

    render() {
        return (
            <div className="container card group-card-body">
                <span>New Post</span>
                <input type="text" className="form-control" placeholder="Title"
                    onChange={(e) => this.changeTitle(e.target.value)} />
                <br />
                <textarea className="form-control" placeholder="Body"
                    onChange={(e) => this.changeText(e.target.value)} />
                <br />
                <button className="btn btn-success"
                    onClick={() => { this.props.makeNewPost(this.state, false) }}>
                    Post
                </button>
                <br />

            </div>
        )
    }
}
