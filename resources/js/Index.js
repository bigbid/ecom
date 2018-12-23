import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TopNav from "./layouts/topNav"
import ProductGrid from  "./components/productGrid"

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guest: true
        };

        this.updateAuthenticateion = this.updateAuthenticateion.bind(this);
    }

    updateAuthenticateion(guest){
        this.setState({
            guest: guest
        })
    }

    render() {

        return (
            <div>
                <TopNav updateAuthenticateion={this.updateAuthenticateion}/>
                <div className="mt-5 p-2">
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
