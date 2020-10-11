import React, { Component } from 'react';
import * as apiConstant from "../../apiConstant/apiConstant";
import { connect } from "react-redux";


class ShelfSetUp extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            shelfCreateId:'',
            bookId: '',
            btnName:'Submit',
            globalId:'',
        }
    }
    //#region Helper

    shelfSetupDispatch()
    {
        this.props.store.dispatch({
            type: apiConstant.shelfSetUpApiCalled,
            payload: {
                url: "/shelfSetup",
                onSuccess: apiConstant.shelfSetUpApiSuccess,
                onError: apiConstant.shelfSetUpApiFailed,
            }
        });
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

    shelfCreateDispatch()
    {
        this.props.store.dispatch({
            type: apiConstant.shelfApiCalled,
            payload:{
                url: "shelfCreate",
                onSuccess: apiConstant.shelfApiSuccess,
                onError: apiConstant.shelfApiFailed,
            }
        });
    }

    //#endregion
    
    componentDidMount()
    {
        let allState = this.props.store.getState();

        if(allState.entities.shelfSetup.list.length === 0)
            this.shelfSetupDispatch();

        if(allState.entities.book.list.length === 0)
            this.bookDispatch();
        if(allState.entities.shelfCreate.list.length === 0)
            this.shelfCreateDispatch();
    }

    //#region CRUD

    ShelfCreateHandler = event =>{
        this.setState({
            shelfCreateId: event.target.value,
        });
    }
    BookHandler = event =>{
        this.setState({
            bookId: event.target.value,
        });
    }

    SaveShelfSetup(data){
        this.props.store.dispatch({
            type: apiConstant.shelfSetUpApiCreated,
            payload: {
                url: "shelfSetup",
                method: apiConstant.POST,
                data: data,
                onSuccess: apiConstant.shelfSetUpApiSuccess,
                onError: apiConstant.shelfSetUpApiFailed,
            }
        })
    }

    ClearState()
    {
        this.setState({
            shelfCreateId:'',
            bookId: '',
            btnName:'Submit',
            globalId:'',
        })
    }

    SubmitHandler  = event =>{
        event.preventDefault();
        let data = {
            bookId: Number(this.state.bookId),
            shelfCreateId: Number(this.state.shelfCreateId),
        }
        if(this.state.btnName === "Submit")
            this.SaveShelfSetup(data);
    }
    ResetHandler = event =>{
        event.preventDefault();
    }

    EditHandler = id =>{
        let index = this.props.shelfSetupList.findIndex(item => item.id === id);

        this.setState({
            shelfCreateId:this.props.shelfSetupList[index].shelfCreateId,
            bookId: this.props.shelfSetupList[index].bookId,
            btnName: 'Update',
            globalId: id,
        })
    }
    DeleteHandler = id =>{

    }

    //#endregion

    render() {
        return (
            <>
                <h5>Shelf Setup</h5>
                <hr/>
                <form>
                    <div className = "row">
                        <div className="form-row col-md-6">
                            <label className="col-sm-3 col-form-label">Shelf Number</label>
                            <select onChange = {this.ShelfCreateHandler} value = {this.state.shelfCreateId} className="form-control col-sm-9">
                            {
                                this.props.shelfCreate.map((value, index) =>
                                    <option key = {value.id} value = {value.id}>{value.shelfNumber}</option>
                                )
                            }
                            </select>
                        </div>
                        <div className="form-row col-md-6">
                            <label className="col-sm-3 col-form-label">Book Name</label>
                            <select onChange = {this.BookHandler} value = {this.state.bookId} className="form-control col-sm-9">
                            {
                                this.props.bookList.map((value, index) =>
                                    <option key = {value.id} value = {value.id}>{value.name}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                    <div className="form-row" style = {{marginTop:10}}>
                        <button type = "submit" onClick = {this.SubmitHandler} className = "btn btn-primary btn-sm" >{this.state.btnName}</button>
                        <button type = "button" onClick = {this.ResetHandler} className = "btn btn-danger btn-sm" >Reset</button>
                    </div>
                </form>
                <div className = "row" style = {{marginTop:20}}>
                        <table className = "table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Shelf Number</th>
                                    <th>Book Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.shelfSetupList.map( (value, index ) => 
                                        <tr key = {value.id}>
                                            <td>{value.shelfCreate.shelfNumber}</td>
                                            <td>{value.book.name}</td>
                                            <td>
                                                <button className = "btn btn-success btn-sm" onClick = {() => this.EditHandler(value.id)}>Edit</button>
                                                <button className = "btn btn-danger btn-sm" onClick = {() => this.DeleteHandler(value.id)}>Delete</button>
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
    return{
        shelfCreate: state.entities.shelfCreate.list,
        bookList: state.entities.book.list,
        shelfSetupList: state.entities.shelfSetup.list,
    }
}
export default connect(mapStateToProps) (ShelfSetUp);