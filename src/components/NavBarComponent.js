import React from "react";
import { Link } from "react-router-dom";


const NavBarComponent = () =>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Study Group</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/search">Search Courses</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                </li>
            </ul>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/login">Sign In/Log Out</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/signup">Sign Up</a>
            </li>
        </ul>
    </nav>

export default NavBarComponent