import React from "react";

export default class NewPostComponent extends React.Component {
    render() {
        return (
            <div className="container card">
                <span>New Post</span>
                <input type="text" className="form-control" placeholder="Title"/>
                <br/>
                <textarea className="form-control" placeholder="Body"/>

            </div>
        )
    }
}
