import React, { Component } from 'react';
import * as apiConstant from '../../apiConstant/apiConstant';
import { connect } from "react-redux";

class Shelf extends Component {
    constructor(props){
        super(props);
        this.state = {
            shelfNumber:'',
            description: '',
            btnName: 'Submit',
            globalId: '',
        }
    }
    ShelfNumberHandler = event => {
        this.setState({
           shelfNumber : event.target.value,
        })
    }
    DescriptionHandler = event => {
        this.setState({
           description : event.target.value,
        })
    }

    ClearState(){
        this.setState({
            shelfNumber : '',
            description : '',
            btnName:'Submit',
            globalId: '',
        });
    }

    SaveShelfCreate(data){
        this.props.store.dispatch({
            type: apiConstant.shelfApiCreated,
            payload:{
                url:'shelfCreate',
                method: apiConstant.POST,
                data: data,
                onSuccess :apiConstant.shelfApiSuccess,
                onError: apiConstant.shelfApiFailed,
            }
        });
    }
    UpdateShelfCreate(data){
        this.props.store.dispatch({
            type: apiConstant.shelfApiUpdated,
            payload:{
                url:'shelfCreate/'+this.state.globalId,
                method: apiConstant.PUT,
                data: data,
                onSuccess :apiConstant.shelfApiSuccess,
                onError: apiConstant.shelfApiFailed,
            }
        });
    }
    SubmitHandler = event => {
        event.preventDefault();
        let data = {
            shelfNumber: this.state.shelfNumber,
            description: this.state.description,
        };
        
        if(this.state.btnName === 'Submit'){
            this.SaveShelfCreate(data);
        }
        else{
            this.UpdateShelfCreate(data);
        }
        this.ClearState();
    }

    EditHandler = id =>{
        let index = this.props.shelfCreateList.findIndex(item => item.id === id);
        this.setState({
            shelfNumber:this.props.shelfCreateList[index].shelfNumber,
            description: this.props.shelfCreateList[index].description, 
            btnName: 'Update',
            globalId: id,
        });
        console.log(this.props.shelfCreateList[index]);
    }
    DeleteHandler = id =>{
        this.props.store.dispatch({
            type: apiConstant.shelfApiDeleted,
            payload:{
                url:'shelfCreate/'+id,
                method: apiConstant.DELETE,
                onSuccess :apiConstant.shelfApiSuccess,
                onError: apiConstant.shelfApiFailed,
            }
        });
    }

    ResetHandler = event =>{
        event.preventDefault();
        this.ClearState();
    }

    componentDidMount(){
        this.props.store.dispatch({
            type: apiConstant.shelfApiCalled,
            payload:{
                url: "shelfCreate",
                onSuccess: apiConstant.shelfApiSuccess,
                onError: apiConstant.shelfApiFailed,
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <h5>Create Shelf</h5>
                <hr/>
                <form onSubmit = {this.SubmitHandler}>
                    <div className= "row">
                        <div className="form-row col-md-6">
                            <label className="col-sm-3 col-form-label">Shelf Number</label>
                            <input type="text" value = {this.state.shelfNumber} className="form-control col-sm-9" onChange = {this.ShelfNumberHandler}></input>
                        </div>
                        <div className="form-row col-md-6">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <textarea type="text" value = {this.state.description} col = "3" className="form-control col-sm-10" onChange = {this.DescriptionHandler}></textarea>
                        </div>
                    </div>
                    <div className="form-row" style = {{marginTop:10}}>
                        <button type = "submit" className = "btn btn-primary btn-sm" >{this.state.btnName}</button>
                        <button type = "button" className = "btn btn-danger btn-sm" onClick = {this.ResetHandler}>Reset</button>
                    </div>
                </form>
                <div className = "row" style = {{marginTop: 20}}>
                    <table className = "table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Shelf Number</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.shelfCreateList.map((values, index ) =>
                                    <tr key = {values.id}>
                                        <td>{values.shelfNumber}</td>
                                        <td>{values.description}</td>
                                        <td>
                                            <button className = "btn btn-success btn-sm" onClick = {() =>this.EditHandler(values.id)}>Edit</button>
                                            <button className = "btn btn-danger btn-sm" onClick = {() =>this.DeleteHandler(values.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return {
        shelfCreateList: state.entities.shelfCreate.list
    }
}


export default connect(mapStateToProps)(Shelf);