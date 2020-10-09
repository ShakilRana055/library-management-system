
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Student from '../student/student';
import ShelfCreate from "../shelf/shelfCreate";
import Book from '../book/book';

class route extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/student" component = {() => <Student store = {this.props.store}></Student>}></Route>
                <Route exact path = "/shelfCreate" component = {() => <ShelfCreate store = {this.props.store}></ShelfCreate>}></Route>
                <Route exact path = "/book" component = {() => <Book store = {this.props.store}></Book>}></Route>
            </>
        );
    }
}

export default route;

function Home(){
    return(
      <div>This is Home page</div>
    )
  }
  
