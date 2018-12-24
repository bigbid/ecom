import React, {Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";

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

    getProducts() {
        fetch("http://localhost:8888/api/products")
            .then(response => response.json())
            .then(data => this.setState({products: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        return (
            <div>
                {this.state.products.map(function (product, index) {
                    return (
                        <Link key={index} to={"/product/"+ product.id + "/" + Helper.slug(product.name)}>
                            <div className="col-3 p-2">
                                <img src={product.images[0]} alt="" style={{maxWidth: "100%", maxHeight: "300px"}}/>
                                <br/>
                                {product.name}
                                <br/>
                                {product.price}
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}