

import React, { Component } from 'react';
import * as apiConstant from "../../apiConstant/apiConstant";
import { connect } from "react-redux";
class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            code: '',
            numberOfCopies: '',
            author: '',
            publication: '',
            description: '',
            availableQuantity: '',
            btnName: 'Submit',
            globalId: '',
        }
    }

    //#region Handler
    NameHandler = event =>{
        this.setState({
           name : event.target.value,
        });
    }
    CodeHandler = event =>{
        this.setState({
            code : event.target.value,
        });
    }
    NumberOfCopiesHandler = event =>{
        this.setState({
           numberOfCopies : event.target.value,
        });
    }
    AuthorHandler = event =>{
        this.setState({
           author : event.target.value,
        });
    }
    PublicationHandler = event =>{
        this.setState({
           publication : event.target.value,
        });
    }
    DescriptionHandler = event =>{
        this.setState({
           description : event.target.value,
        });
    }
    AvailableQuantityHandler = event =>{
        this.setState({
           availableQuantity : event.target.value,
        });
    }

    //#endregion
    
    //#region Actions

    SaveBook(data){
        this.props.store.dispatch({
            type: apiConstant.bookApiCreated,
            payload: {
                url: '/book',
                method: apiConstant.POST,
                data: data,
                onSuccess: apiConstant.bookApiSuccess,
                onError: apiConstant.bookApiFailed,
            }
        });

        
    }
    UpdateBook(data){
        let newData = String(data.numberOfCopies);
        data.numberOfCopies = newData;
        this.props.store.dispatch({
            type: apiConstant.bookApiUpdated,
            payload: {
                url: 'book/'+this.state.globalId,
                method: apiConstant.PUT,
                data: data,
                onSuccess: apiConstant.bookApiSuccess,
                onError: apiConstant.bookApiFailed,
            }
        })
    }
    ClearState(){
        this.setState({
            name: '',
            code: '',
            numberOfCopies: '',
            author: '',
            publication: '',
            description: '',
            availableQuantity: '',
            btnName: 'Submit',
            globalId: '',
        });
    }

    SubmitHandler = event =>{
        event.preventDefault();
        let data = {
            name: this.state.name,
            code: this.state.code,
            numberOfCopies: this.state.numberOfCopies,
            author: this.state.author,
            publication: this.state.publication,
            description:  this.state.description,
        }

        if(this.state.btnName === "Submit")
            this.SaveBook(data);
        else
            this.UpdateBook(data);
        
        this.ClearState();
    }
    ResetHandler = event =>{
        event.preventDefault();
        this.ClearState();
    }

    EditHandler = id =>{
        let index = this.props.bookList.findIndex(item => item.id === id);
        this.setState({
            name: this.props.bookList[index].name,
            code: this.props.bookList[index].code,
            numberOfCopies: this.props.bookList[index].numberOfCopies,
            author: this.props.bookList[index].author,
            publication: this.props.bookList[index].publication,
            description: this.props.bookList[index].description,
            availableQuantity: this.props.bookList[index].availableQuantity,
            btnName: 'Update',
            globalId: id,
        });
    }
    DeleteHandler = id =>{
        this.props.store.dispatch({
            type: apiConstant.bookApiDeleted,
            payload: {
                url: 'book/' + id,
                method: apiConstant.DELETE,
                onSuccess: apiConstant.bookApiSuccess,
                onError: apiConstant.bookApiFailed,
            }
        })
    }

    //#endregion
    
    //#region Component
        componentDidMount(){
            this.props.store.dispatch({
                type: apiConstant.bookApiCalled,
                payload: {
                    url: "/book",
                    onSuccess: apiConstant.bookApiSuccess,
                    onError: apiConstant.bookApiFailed,
                }
            }) 
        }

    //#endregion

    render() {
        const { name, code,numberOfCopies,author,publication,description,btnName } = this.state;
        console.log(this.props);
        return (
            <>
                <h3>Book Entry</h3>
                <hr/>
                <form>
                    <div className= "row">
                        <div className="form-row col-md-4">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <input type="text" value = {name} onChange = {this.NameHandler} className="form-control col-sm-10" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Code</label>
                            <input type="text" value = {code} onChange = {this.CodeHandler} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Number of Copies</label>
                            <input type="number" value = {numberOfCopies} onChange = {this.NumberOfCopiesHandler} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                    </div>
                    <div className = "row" style = {{ marginTop:10}}>
                        <div className="form-row col-md-4">
                            <label className="col-sm-2 col-form-label"  >Author</label>
                            <input type="text" value = {author} onChange = {this.AuthorHandler} className="form-control col-sm-10" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label">Publication</label>
                            <input type="text" value = {publication} onChange = {this.PublicationHandler} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        <div className="form-row col-md-4">
                            <label className="col-sm-3 col-form-label" >Description</label>
                            <input type="text" value = {description} onChange = {this.DescriptionHandler} className="form-control col-sm-9" name="name" id="name"></input>
                        </div>
                        
                    </div>
                    <div className="form-row" style = {{marginTop:10}}>
                        <button type = "button" onClick = {this.SubmitHandler} className = "btn btn-primary btn-sm">{btnName}</button>
                        <button type = "button" onClick = {this.ResetHandler} className = "btn btn-danger btn-sm">Reset</button>
                    </div>
                </form>
                <div className = "row" style = {{marginTop:20}}>
                    <table className = "table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Number of Copies</th>
                                <th>Author</th>
                                <th>Publication</th>
                                <th>Description</th>
                                <th>AvailableQuantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.bookList.map((value, index) =>
                                    <tr key = {value.id}>
                                        <td>{value.name}</td>
                                        <td>{value.code}</td>
                                        <td>{value.numberOfCopies}</td>
                                        <td>{value.author}</td>
                                        <td>{value.publication}</td>
                                        <td>{value.description}</td>
                                        <td>{value.availableQuantity}</td>
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
    console.log(state);
    return {
        bookList: state.entities.book.list,
    }
}
export default connect(mapStateToProps)(Book);