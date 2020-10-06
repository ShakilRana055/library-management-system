
import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <>
                <h3>Student Registration</h3>
                <hr/>
                <form>
                    <div className= "row">
                        <div className="form-row col-md-4">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <input type="text" className="form-control col-sm-10" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Student Id</label>
                            <input type="text" className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Dept.</label>
                            <select className="form-control col-sm-9" name="name" id="name">
                                <option value = "">CSE</option>
                                <option value = "">EEE</option>
                                <option value = "">BBA</option>
                                <option value = "">CIVIL</option>
                                <option value = "">Pharmacy</option>
                                <option value = "">Microbiology</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className = "row" style = {{ marginTop:10}}>
                        <div className="form-row col-md-4">
                            <label className="col-sm-2 col-form-label"  >Email</label>
                            <input type="text" className="form-control col-sm-10" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label"  >Image</label>
                            <input type="file" style = {{border:0}} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label" >Date of Birth</label>
                            <input type="date" className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <button className = "btn btn-primary btn-sm">Submit</button>
                        <button className = "btn btn-danger btn-sm">Reset</button>
                    </div>
                </form>
            </>
        );
    }
}

export default Student;