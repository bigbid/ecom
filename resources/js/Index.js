import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import TopNav from "./layouts/topNav"
import routes from "./routes";

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guest: true,
        };
        this.mounted = false;

        this.updateAuthenticateion = this.updateAuthenticateion.bind(this);
    }

    componentDidMount(){
        this.mounted = false;
    }

    updateAuthenticateion(guest) {
        if(this.mounted) {
            this.setState({
                guest: guest
            })
        }
    }



    render() {

        function RouteWithSubRoutes(route) {
            return (
                <Route
                    path={route.path}
                    render={props => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                    )}
                />
            );
        }

        return (
            <Router>
                <div>
                    <TopNav updateAuthenticateion={this.updateAuthenticateion}/>
                    <div className="mt-5 p-2 container">
                        <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index/>, document.getElementById('app'));
}
