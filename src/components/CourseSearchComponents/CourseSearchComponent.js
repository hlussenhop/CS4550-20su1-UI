import React from "react";

export default class CourseSearchComponent extends React.Component {

    state = {}

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="container">
                <div className=" form-group row">
                    <div className="col-lg-3 col-md-6">
                        <div className="form-inline row">
                            <div className="col-6">
                                <label htmlFor="subjectFld" className="col-form-label float-right">Select Subject: </label>
                            </div>
                            <div className="col-5">
                                <select
                                    onChange={(e) => this.props.setSubject(e.target.value)}
                                    className="form-control"
                                    id="subjectFld">
                                    <option value="arth">ARTH</option>
                                    <option value="biol">BIOL</option>
                                    <option value="chem">CHEM</option>
                                    <option value="cive">CIVE</option>
                                    <option value="comm">COMM</option>
                                    <option value="crim">CRIM</option>
                                    <option selected={true} value="cs">CS</option>
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
                    <div className="col-lg-3 col-md-6 mt-2">
                        <div className="form-inline">
                            <div className="col-6">
                                <label htmlFor="termFld" className="col-form-label float-right">Select Term: </label>
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
                    <div className="col-lg-6 col-md-6">
                        <div className="form-inline">
                            <div className="col-6">
                                <label className="col-form-label float-right">Course Number:<br />(optional)</label>
                            </div>
                            <div className="col-6">
                                <input className="form-control"
                                    type="number"
                                    placeholder="4550"
                                    onChange={(e) => this.props.setCourseNumber(e.target.value.toString())} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" form-group row container">
                    <div className="col-lg-12">
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
            </div>
        )
    }
}