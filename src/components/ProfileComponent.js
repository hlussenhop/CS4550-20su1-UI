import React from "react";
import {Link} from "react-router-dom";

class ProfileComponent extends React.Component{

    render() {
        return (
            <div className={"profile"}>
                    <h2>Student Name</h2>
                    <Link to={"/editProfile"}>
                        <button className="btn btn-danger float-right">
                            Edit Profile
                        </button>
                    </Link>
            </div>

        )
    }

}

export default ProfileComponent