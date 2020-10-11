import React, { Component } from 'react';
import {connect} from 'react-redux';

// bootstrap and jquery importing
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import $ from 'jquery';
// import Popper from 'popper.js';

// router, route, link importing
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../css/sidebarStyles.css";
import MainRouter from "./route";

class Layout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Router>
            <div>
                <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-primary">
                    <div className = "container-fluid">
                    <h5>Library Management System</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    </ul>
                    
                    <div className="nav-item dropdown">
                        <a className="nav-link btn btn-success dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {
                                this.props.userInformation.email
                            }
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to = "/profile">Profile</Link>
                            <Link className="dropdown-item" to = "/setting">Setting</Link>
                            <Link className="dropdown-item" to = "/logout">Log Out</Link>
                        </div>
                    </div>
                    </div>
                    </div>
                </nav>
                
                <div className="sidebar">
                    <Link to = "/">Home</Link>
                    <Link to = "/student">Student</Link>
                    <Link to = "/shelfCreate">Shelf Create</Link>
                    <Link to = "/book">Book</Link>
                    <Link to = "/shelfSetUp">Shelf Setup</Link>
                </div>
                <div className="content contentOverRide">
                   <MainRouter store = {this.props.store}></MainRouter>
                </div>
            </div>
            </Router>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        userInformation: state.entities.user.userInformation
    }
}

export default connect(mapStateToProps)(Layout);

