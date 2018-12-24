import React, {Component} from "react";

import ProductPreview from "../components/productPreview"

export default class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product_id: this.props.match.params.id,
            product: {}
        };

        this.fetchProductDetails = this.fetchProductDetails.bind(this);
    }

    componentDidMount() {
        console.log("ok")
        this.fetchProductDetails();
    }

    fetchProductDetails() {
        fetch("http://localhost:8888/api/product/" + this.state.product_id)
            .then(response => response.json())
            .then(data => this.setState({product: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    { this.state.product.images && <ProductPreview images={this.state.product.images}/> }
                </div>
                <div className="col-8">
                    <h3>{ this.state.product.name }</h3>
                    <h5>{ this.state.product.brand }</h5>
                </div>
            </div>
        );
    }

}