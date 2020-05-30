import React from "react";
import SectionDetailComponent from "./SectionDetailComponent";

const CourseDetailsComponent = () =>
    <div className="container">
        <div className="card mb-3">
            <div className="card-header">
                <h4>
                    <b>CS3500 Object-Oriented Design</b>
                </h4>
            </div>
            <div className="card-body">
                <p className="card-text">Presents a comparative approach to object-oriented programming and design.
                    Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity.
                    Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and
                    composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs.
                    subtyping. Fosters a deeper understanding of the principles of object-oriented programming and
                    design including software components, object-oriented design patterns, and the use of graphical
                    design notations such as UML (unified modeling language). Basic concepts in object-oriented design
                    are illustrated with case studies in application frameworks and by writing programs in one or more
                    object-oriented languages.
                </p>
            </div>
        </div>

        <p1><b>Sections</b></p1>
        <div className="row row-cols-2">
                <SectionDetailComponent/>
                <SectionDetailComponent/>
                <SectionDetailComponent/>
        </div>

    </div>

export default CourseDetailsComponent