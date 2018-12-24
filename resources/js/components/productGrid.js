import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import * as Helper from "../helpers";

export default class TopNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        };

        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    componentWillReceiveProps(props){
        this.getProducts();
    }

    getProducts() {
        let query = "";
        if(this.props.similar){
            query += "similar="+this.props.similar
        }

        if(this.props.search){
            query += "similar="+this.props.search
        }

        fetch("http://localhost:8888/api/products?"+query)
            .then(response => response.json())
            .then(data => this.setState({products: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }



    render() {
        let that = this;
        return (
            <div className="row">
                {this.state.products.map(function (product, index) {
                    return (
                        <div className="col-3 p-2" key={index}>
                            <Link to={"/product/" + product.id + "/" + Helper.slug(product.name)}>

                                <img src={product.images[0]} alt="" style={{maxWidth: "100%", maxHeight: "300px"}}/>
                                <br/>
                                {product.name}
                                <br/>
                                {product.price}

                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}