import React from "react";

const NavBarComponent = () =>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="../search/">Study Group</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="../search/">Search Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../details/">Course Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
            </ul>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Sign In/Log Out</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
            </li>
        </ul>
    </nav>

export default NavBarComponent