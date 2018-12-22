import React, { Component } from 'react';

import Authenticate from "../components/authenticate"

export default class TopNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    authenticate(auth){
        this.props.authenticated(auth)
    }


    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search"
                               aria-label="Search" />
                    </form>

                    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto px-lg-5">
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Login / Signup</a>
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
                        </ul>
                    </div>
                    <Authenticate authenticated={this.props.authenticate} />
                </nav>
        );
    }
}