import React, { Component } from 'react';
import { connect } from "react-redux";
import * as apiConstant from "../../apiConstant/apiConstant";
import StudentInformation from './studentInformation';
import BorrowBookAction from './borrowBookAction';


class BorrowBook extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            studentName: '',
            dropdown : [],
            studentId:'',
            studentInformation:'',
            searchFound: false,
        }
    }
    searchMatching(name)
    {
        let studentArray = this.props.studentList;
        [...studentArray] = studentArray.filter( function(items) {
            let index = items.name.indexOf(name) ;
            if(index > -1)
                return items;
            index = items.studentId.indexOf(name);
            if(index > -1)
                return items;
        });
        this.setState({
            dropdown: studentArray,
        });
    }

    StudentName = event =>{
        let name = event.target.value;
        this.setState({
            studentName: event.target.value
        });
        this.searchMatching(name);
    }

    Value = (id, name) =>{
        this.setState({
            studentId: id,
            studentName:name,
        });
    }

    SearchHandler = event =>{
        if(this.state.studentId !== '')
        {
            let index = this.state.dropdown.findIndex(item => item.id === this.state.studentId);
            if(index !== -1)
            {
                this.setState({
                    studentInformation : this.state.dropdown[index],
                    searchFound: true,
                });
            }
           
            if( index === -1)
            {
                index = this.state.dropdown.findIndex( item => item.studentId === this.state.studentId);
                this.setState({
                    studentInformation : this.state.dropdown[index],
                    searchFound: true,
                });
            }
        }
        else if(this.state.studentName !== ""){
            let index = this.props.studentList.findIndex( item => item.name.toLowerCase() === this.state.studentName.toLowerCase());
            if( index > -1)
            {
                this.setState({
                    studentInformation : this.props.studentList[index],
                    searchFound: true,
                });
            }
            
        }
        else{
            this.setState({
                studentInformation : '',
                searchFound: false,
            });
        }
    }
    bookDispatch()
    {
        this.props.store.dispatch({
            type: apiConstant.bookApiCalled,
            payload: {
                url: "/book",
                onSuccess: apiConstant.bookApiSuccess,
                onError: apiConstant.bookApiFailed,
            }
        });
    }

    studentDispatch()
    {
        this.props.store.dispatch({
            type: apiConstant.studentApiCalled,
            payload:{
                url: "student",
                method:apiConstant.GET,
                onSuccess: apiConstant.studentApiSuccess,
                onError:apiConstant.studentApiFailed,
            }
        });
    }
    componentDidMount()
    {
        if(this.props.store.getState().entities.student.list.length === 0)
            this.studentDispatch()
        if(this.props.store.getState().entities.book.list.length === 0)
            this.bookDispatch();

        this.setState({
            dropdown: this.props.studentList,
        });
    }
    render() {
        return (
            <>
                <h5>Borrow Book</h5>
                <hr/>
                <div className = "row">
                    <div className = "col-md-2">

                    </div>
                    <div className = "col-md-8">
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Student Name</label>
                            <div className = "dropdown col-sm-9">
                                <input type="text" value = {this.state.studentName} onChange = {this.StudentName} autoComplete = "off" className="form-control col-sm-9 dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></input>
                                <div className="dropdown-menu col-sm-9" aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        this.state.dropdown.map((value, index) =>
                                            <a className="dropdown-item" key = {value.id} onClick = {() => this.Value(value.id, value.name)}>{value.name} ( { value.studentId } )</a>
                                        )
                                    }
                                </div>
                            </div>
                            <button className = "col-sm-1 btn btn-primary btn-sm" onClick = {() => this.SearchHandler()}>Search</button>
                        </div>
                    </div>
                    <div className = "col-md-2">

                    </div>
                </div>
                
                <StudentInformation data = {this.state.studentInformation}>

                </StudentInformation>
                <BorrowBookAction 
                    store = {this.props.store} searchFound = {this.state.searchFound}
                    data = {this.state.studentInformation}
                    bookList = {this.props.bookList}
                >
                        
                </BorrowBookAction>
            </>
        );
    }
}

const mapStateToProps = state =>{
    return {
        studentList: state.entities.student.list,
        bookList: state.entities.book.list,
    }
}

export default connect(mapStateToProps) (BorrowBook);