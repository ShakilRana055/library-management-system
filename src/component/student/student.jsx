
import React, { Component } from 'react';
import * as apiConstant from '../../apiConstant/apiConstant';
import {connect} from "react-redux";

class Student extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name:'',
            studentId:'',
            department: 'CSE',
            email:'',
            image:'',
            dateOfBirth:'',
            btnName: 'Submit',
            globalId: '',
        };
    }

    componentDidMount(){
        this.props.store.dispatch({
            type: apiConstant.studentApiCalled,
            payload:{
                url: "/student",
                method:apiConstant.GET,
                onSuccess: apiConstant.studentApiSuccess,
                onError:apiConstant.studentApiFailed,
            }
        });
    }
    
    NameHandler = event =>{
        this.setState({
           name :event.target.value,
        })
    }
    StudentIdHandler = event =>{
        this.setState({
           studentId :event.target.value,
        })
    }
    DepartmentHandler = event =>{
        this.setState({
           department :event.target.value,
        })
    }
    EmailHandler = event =>{
        this.setState({
           email :event.target.value,
        })
    }
    ImageHandler = event =>{
        this.setState({
           image :event.target.value,
        })
    }
    DateOfBirthHandler = event =>{
        this.setState({
           dateOfBirth :event.target.value,
        })
    }

    ClearField(){
        this.setState({
            name:'',
            studentId:'',
            department: 'CSE',
            email:'',
            image:'',
            dateOfBirth:'',
            globalId: '',
            btnName:"Submit",
        });
    }

    SaveStudent (data){
        this.props.store.dispatch({
            type: apiConstant.studentApiCreated,
            payload:{
                url: "student",
                data,
                method: apiConstant.POST,
                onSuccess: apiConstant.studentApiSuccess,
                onError: apiConstant.studentApiFailed,
            }
        });
    }
    UpdateStudent(data){
        this.props.store.dispatch({
            type: apiConstant.studentApiUpdated,
            payload: {
                url: 'student/'+this.state.globalId,
                method:apiConstant.PUT,
                data,
                onSuccess: apiConstant.studentApiSuccess,
                onError: apiConstant.studentApiFailed,
            }
        })
    }
    SubmitHandler = event =>{
        event.preventDefault();
        let data = {
            name:this.state.name,
            studentId:this.state.studentId,
            department: this.state.department,
            email:this.state.email,
            image:this.state.image,
            dateOfBirth:this.state.dateOfBirth,
        };
        if( this.state.btnName === "Submit"){
            this.SaveStudent(data);
        }
        else{
            this.UpdateStudent(data);
        }
        this.ClearField();
    }
    ResetHandler = event =>{
        event.preventDefault();
        this.ClearField();
    }
    EditHandler = id =>{
        let index = this.props.studentList.findIndex(item => item.id === id);
        this.setState({
            name: this.props.studentList[index].name,
            studentId: this.props.studentList[index].studentId,
            email: this.props.studentList[index].email,
            department: this.props.studentList[index].department,
            dateOfBirth : this.props.studentList[index].dateOfBirth,
            btnName: 'Update',
            globalId: id,
        });
    }
    DeleteHandler = id =>{
        this.props.store.dispatch({
            type: apiConstant.studentApiDeleted,
            payload: {
                url: 'student/'+id,
                method:apiConstant.DELETE,
                onSuccess: apiConstant.studentApiSuccess,
                onError: apiConstant.studentApiFailed,
            }
        })
    }
    render() {
        const {name, studentId, department, email, image, dateOfBirth, btnName} = this.state;
        return (
            <>
                <h3>Student Registration</h3>
                <hr/>
                <form>
                    <div className= "row">
                        <div className="form-row col-md-4">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <input type="text" value = {name} onChange = {this.NameHandler} className="form-control col-sm-10" name="name" id="name"></input>
                            
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Student Id</label>
                            <input type="text" value = {studentId} onChange = {this.StudentIdHandler} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Dept.</label>
                            <select className="form-control col-sm-9" value = {department} onChange = {this.DepartmentHandler} name="name" id="name">
                                <option value = "CSE">CSE</option>
                                <option value = "EEE">EEE</option>
                                <option value = "BBA">BBA</option>
                                <option value = "CIVIL">CIVIL</option>
                                <option value = "Pharmacy">Pharmacy</option>
                                <option value = "Microbiology">Microbiology</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className = "row" style = {{ marginTop:10}}>
                        <div className="form-row col-md-4">
                            <label className="col-sm-2 col-form-label"  >Email</label>
                            <input type="text" value = {email} onChange = {this.EmailHandler} className="form-control col-sm-10" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Image</label>
                            <input type="file" value = {image} onChange = {this.ImageHandler} style = {{border:0}} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label" >Date of Birth</label>
                            <input type="date" value = {dateOfBirth} onChange = {this.DateOfBirthHandler} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                    </div>
                    <div className="form-row" style = {{marginTop:10}}>
        <button type = "button" onClick = {this.SubmitHandler} className = "btn btn-primary btn-sm">{btnName}</button>
                        <button type = "button" onClick = {this.ResetHandler} className = "btn btn-danger btn-sm">Reset</button>
                    </div>
                </form>
                <div className = "row">
                    <table className = "table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Student Id</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.studentList.map((value, index) =>
                                    <tr key = {value.id}>
                                        <td>{value.name}</td>
                                        <td>{value.studentId}</td>
                                        <td>{value.email}</td>
                                        <td>{value.department}</td>
                                        <td>
                                            <button onClick = {() =>this.EditHandler(value.id)} className = "btn btn-success btn-sm">Edit</button>
                                            <button onClick = {() =>this.DeleteHandler(value.id)} className = "btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

const mapStateToProps = state =>{
    return {
        studentList : state.entities.student.list,
    }
}

export default connect(mapStateToProps) (Student);