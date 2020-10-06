
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Student from '../student/student';
import ShelfCreate from "../shelf/shelfCreate";

class route extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <>
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/student" component = {Student}></Route>
                <Route exact path = "/shelfCreate" component = {() => <ShelfCreate store = {this.props.store}></ShelfCreate>}></Route>
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
  
