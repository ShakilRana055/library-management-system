import React, { Component } from 'react';

class StudentInformation extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        if(this.props.data === "")
        {
            return (
                <>
                </>
            );
        }
        else {
            return (
            <>
                <div className = "row" style = {{marginTop:20}}>
                    <table className = "table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Student Id</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.data.name}</td>
                                <td>{this.props.data.studentId}</td>
                                <td>{this.props.data.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className = "row" style = {{marginTop: 20}}>
                    <div className = "col-sm-6">
                        <h4>Book in Hand</h4>
                    </div>
                    <div className = "col-sm-6">
                        <h4>History</h4>
                    </div>
                </div>
            </>
            );
        }
    }
}


export default StudentInformation;