import React, { Component } from 'react';

class BorrowBookAction extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            studentId: '',
            todaysDate: function(){
                    let dateTime = new Date();
                    let todaysDate = dateTime.getDate();
                    let month = dateTime.getMonth() + 1;
                    let year = dateTime.getFullYear();
                    return month + "/"+todaysDate +"/" + year;
            },
        }
    }

    render() {
        if(this.props.searchFound === false || this.props.data === ""){
            return <></>
        }
        else {
            return (
            <>
                <div className = "row" style = {{marginTop:20}}>
                    <div className = "col-md-1">

                    </div>
                    <div className = "col-md-10">
                        <div className = "row">
                            <div className = "col-md-6">
                                <div className="form-row">
                                    <label className="col-sm-2 col-form-label">Book Name</label>
                                    <div className = "dropdown col-sm-9">
                                        <input type="text"  autoComplete = "off" className="form-control col-sm-9 dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></input>
                                        <div className="dropdown-menu col-sm-9" aria-labelledby="navbarDropdownMenuLink">
                                            {
                                                this.props.bookList.map((value, index) =>
                                                    <a className="dropdown-item" key = {value.id} onClick = {() => this.Value(value.id, value.name)}>{value.name} ( { value.code } )</a>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <label className="col-sm-3 col-form-label">From Date</label>
                                    <input type="date" value = {this.state.todaysDate()} readOnly = {true} className="form-control col-sm-9"></input>
                                    {
                                        console.log(this.state.todaysDate())
                                    }
                                </div>
                            </div>
                            <div className = "col-md-6">
                                <div className="form-row">
                                    <label className="col-sm-3 col-form-label">Student Name</label>
                                    <input type="text" value = {this.props.data.name+"( " + this.props.data.studentId + " )"} readOnly = {true} className="form-control col-sm-9"></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className = "col-md-1">

                    </div>
                </div>
            </>
            );
        }
    }
}

export default BorrowBookAction;