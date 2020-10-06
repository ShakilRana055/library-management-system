
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Student from '../student/student';

class route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/Student" component = {Student}></Route>
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
  
