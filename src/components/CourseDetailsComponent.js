import React from "react";

const CourseDetailsComponent = () =>
    <div className="container">
        <div className="card mb-3">
            <div className="card-header"><b>CS3500 Object-Oriented Design</b></div>
            <div className="card-body">
                <p className="card-text">Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs. subtyping. Fosters a deeper understanding of the principles of object-oriented programming and design including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Basic concepts in object-oriented design are illustrated with case studies in application frameworks and by writing programs in one or more object-oriented languages.
                </p>
            </div>
        </div>

        <p1><b>Sections</b></p1>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card bg-light">
                    <div className="card-header"><b>CRN 10425</b></div>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-6">
                            <h6 className="card-text course-professor">Professor</h6>
                            <h6 className="card-text course-time">Times</h6>
                            <h6 className="card-text course-days">Days</h6>
                            <h6>Location</h6>
                        </div>
                        <div className="col-6">
                            <h6 className="card-text text-muted">Amit Shesh</h6>
                            <h6 className="card-text course-time text-muted">9:50am-11:30pm</h6>
                            <h6 className="card-text course-days text-muted">Tuesday, Friday</h6>
                            <h6 className="card-text course-location text-muted">Behrakis Health Sciences Center 310</h6>
                            <button href="#" className="btn btn-success float-right card-link">Enroll</button>
                            {/*<button href="#" className="btn btn-danger float-right card-link">UnEnroll</button>*/}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card bg-light">
                    <div className="card-header"><b>CRN 10425</b></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h6 className="card-text course-professor">Professor</h6>
                                <h6 className="card-text course-time">Times</h6>
                                <h6 className="card-text course-days">Days</h6>
                                <h6>Location</h6>
                            </div>
                            <div className="col-6">
                                <h6 className="card-text text-muted">Amit Shesh</h6>
                                <h6 className="card-text course-time text-muted">9:50am-11:30pm</h6>
                                <h6 className="card-text course-days text-muted">Tuesday, Friday</h6>
                                <h6 className="card-text course-location text-muted">Behrakis Health Sciences Center 310</h6>
                                <button href="#" className="btn btn-success float-right card-link">Enroll</button>
                                {/*<button href="#" className="btn btn-danger float-right card-link">UnEnroll</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="col mb-4">
                    <div className="card bg-light">
                        <div className="card-header"><b>CRN 10425</b></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="card-text course-professor">Professor</h6>
                                    <h6 className="card-text course-time">Times</h6>
                                    <h6 className="card-text course-days">Days</h6>
                                    <h6>Location</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="card-text text-muted">Amit Shesh</h6>
                                    <h6 className="card-text course-time text-muted">9:50am-11:30pm</h6>
                                    <h6 className="card-text course-days text-muted">Tuesday, Friday</h6>
                                    <h6 className="card-text course-location text-muted">Behrakis Health Sciences Center 310</h6>
                                    <button href="#" className="btn btn-success float-right card-link">Enroll</button>
                                    {/*<button href="#" className="btn btn-danger float-right card-link">UnEnroll</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </div>

export default CourseDetailsComponent