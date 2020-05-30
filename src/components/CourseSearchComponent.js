import React from "react";

export default class CourseSearchComponent extends React.Component {

    render() {
        return (
            //Implement in future possibly
            // <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            //     <div className="input-group">
            //         <input type="search" placeholder="Search Courses"
            //             onChange={(event) =>
            //                 this.props.setKeyword(event.target.value)}
            //             aria-describedby="button-addon1"
            //             className="form-control border-0 bg-light" />
            //         <div className="input-group-append">
            //             <button id="button-addon1"
            //                 type="submit" className="btn btn-link text-primary"
            //                 onClick={() => this.findTerm(this.props.keyword)}>
            //                 <i className="fa fa-search"></i>
            //             </button>
            //         </div>
            //     </div>
            // </div>

            // <div className="dropdown">
            //     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
            //             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //         Select Course
            //     </button>
            //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //         <a className="dropdown-item" href="#">Action</a>
            //         <a className="dropdown-item" href="#">Another action</a>
            //         <a className="dropdown-item" href="#">Something else here</a>
            //     </div>
            // </div>
            <div className=" form-group row">
                <div className="col-5">
                    <div className="form-inline row">
                        <div className="col-6">
                            <label htmlFor="subjectFld" className="col-form-label float-left">Select Subject: </label>
                        </div>
                        <div className="col-6">
                            <select
                                onChange={(e) => this.props.setSubject(e.target.value)}
                                className="form-control"
                                id="subjectFld">
                                <option selected={true} value="arth">ARTH</option>
                                <option value="biol">BIOL</option>
                                <option value="chem">CHEM</option>
                                <option value="cive">CIVE</option>
                                <option value="comm">COMM</option>
                                <option value="crim">CRIM</option>
                                <option value="cs">CS</option>
                                <option value="econ">ECON</option>
                                <option value="eece">EECE</option>
                                <option value="engl">ENGL</option>
                                <option value="envr">ENVR</option>
                                <option value="hist">HIST</option>
                                <option value="math">MATH</option>
                                <option value="musc">MUSC</option>
                                <option value="phil">PHIL</option>
                                <option value="phmd">PHMD</option>
                                <option value="phys">PHYS</option>
                                <option value="pols">POLS</option>
                                <option value="psyc">PSYC</option>
                                <option value="thtr">THTR</option>
                                <option value="socl">SOCL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="form-inline">
                        <div className="col-6">
                            <label htmlFor="termFld" className="col-form-label float-left">Select Term: </label>
                        </div>
                        <div className="col-6">
                            <select 
                                onChange={(e) => this.props.setTerm(e.target.value)}
                                className="form-control"
                                id="termFld">
                                <option value="202040">Summer 1 2020</option>
                                <option value="202060">Summer 2 2020</option>
                                <option selected={true} value="202110">Fall 2020</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-success float-right"
                        onClick={() => {
                            if (this.props.term !== "" && this.props.subject !== "") {
                                this.props.findTerm()
                                this.props.setURL()
                            }
                        }}>
                        SUBMIT
                    </button>
                </div>
            </div>
        )
    }
}