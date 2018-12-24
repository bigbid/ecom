import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Authenticate from "../components/authenticate"

import * as Helper from "../helpers"

export default class TopNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guest: true
        };

        this.updateAuthenticateion = this.updateAuthenticateion.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        let token = Helper.getCookie("token");
        if (token !== "") {
            console.log(token);
            this.updateAuthenticateion(false)
        }
    }

    updateAuthenticateion(guest) {
        this.props.updateAuthenticateion(guest);
        this.setState({
            guest: guest
        })
    }

    logout(){
        Helper.delete_cookie("token");
        this.setState({
            guest: true
        })
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        LOGO
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search"
                               aria-label="Search"/>
                    </form>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                {this.state.guest &&
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#authenticationModal">Login
                                    / Signup</a>}
                                {!this.state.guest && <a className="nav-link" href="#">My Account</a>}
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>

                            </li>
                            {!this.state.guest &&
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.logout}>Logout</a>
                            </li>
                            }
                        </ul>
                    </div>
                </div>
                <Authenticate updateAuthenticateion={this.updateAuthenticateion}/>
            </nav>
        );
    }
}