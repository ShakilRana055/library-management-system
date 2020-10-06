import React, { Component } from 'react';

// bootstrap and jquery importing
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

// router, route, link importing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../css/sidebarStyles.css";
import MainRouter from "./route";

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light bg-primary">
                    <div className = "container-fluid">
                    <a className="navbar-brand" href="#">Library Management System</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    </ul>
                    
                    <div className="nav-item dropdown">
                        <a className="nav-link btn btn-success dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            user0001
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                            <a className="dropdown-item" href="#">Log Out</a>
                        </div>
                    </div>
                    </div>
                    </div>
                </nav>
                
                <div className="sidebar">
                    <Link to = "/">Home</Link>
                    <Link to = "/Student">Student</Link>
                </div>
                <div className="content">
                   <MainRouter></MainRouter>
                </div>
            </div>
            </Router>
        );
    }
}

export default Layout;

