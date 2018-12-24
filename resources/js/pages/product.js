import React, {Component} from "react";

import ProductPreview from "../components/productPreview";
import ProductGrid from "../components/productGrid";

export default class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {}
        };

        this.fetchProductDetails = this.fetchProductDetails.bind(this);

    }

    componentDidMount() {
        this.fetchProductDetails();
    }

    componentWillReceiveProps(props){
        this.fetchProductDetails(props);
    }

    fetchProductDetails(props) {
        let id = "";

        if(props){
            id = props.match.params.id;
        }else {
            id = this.props.match.params.id;
        }

        fetch("http://localhost:8888/api/product/" + id)
            .then(response => response.json())
            .then(data => this.setState({product: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        {this.state.product.images && <ProductPreview images={this.state.product.images}/>}
                    </div>
                    <div className="col-8">
                        <h3>{this.state.product.name}</h3>
                        <h5>{this.state.product.brand}</h5>

                        <br/>
                        <div style={{fontSize: "30px", color: "green"}}>
                            ₹{this.state.product.price}
                        </div>

                        <br/>

                        <div>
                            <p>
                                {this.state.product.description}
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <button type="button" className="btn btn-primary btn-lg btn-block">Buy
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-primary btn-lg btn-block">Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                {this.props.match.params.id &&
                    <ProductGrid similar={this.props.match.params.id}/>
                }
            </div>
        );
    }

}