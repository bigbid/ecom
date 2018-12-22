import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TopNav from "./layouts/topNav"
import ProductGrid from  "./components/productGrid"

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        };
    }

    render() {

        return (
            <div>
                <TopNav authenticated={this.state.authenticated}/>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-2" style={{borderRight: "1px solid #cccccc"}}>
                            Left
                        </div>
                        <div className="col-10">
                            <ProductGrid/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
