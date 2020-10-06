import React, { Component } from 'react';
import * as apiConstant from '../../apiConstant/apiConstant';

class Shelf extends Component {
    constructor(props){
        super(props);
        this.state = {
            shelfNumber:'',
            description: '',
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
    SubmitHandler = event => {
        event.preventDefault();
        let data = {
            shelfNumber: this.state.shelfNumber,
            description: this.state.description,
        };
        this.props.store.dispatch({
            type: apiConstant.shelfApiCreated,
            payload:{
                url:'',
                method: apiConstant.POST,
                data: data,
                onSuccess :apiConstant.shelfApiSuccess,
                onError: apiConstant.shelfApiFailed,
            }
        });

        this.setState({
            shelfNumber : '',
            description : '',
        })
    }
    ResetHandler = event =>{
        event.preventDefault();
        this.setState({
            shelfNumber : '',
            description : '',
        })
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
                            <input type="text" className="form-control col-sm-9" onChange = {this.ShelfNumberHandler}></input>
                        </div>
                        <div className="form-row col-md-6">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <input type="text" className="form-control col-sm-10" onChange = {this.DescriptionHandler}></input>
                        </div>
                    </div>
                    <div className="form-row" style = {{marginTop:10}}>
                        <button type = "submit" className = "btn btn-primary btn-sm" >Submit</button>
                        <button type = "button" className = "btn btn-danger btn-sm" onClick = {this.ResetHandler}>Reset</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Shelf;