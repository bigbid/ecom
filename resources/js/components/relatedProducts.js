import React, {Component} from "react";

import ProductGrid from "./productGrid";

export default class RelatedProcusts extends Component {

    constructor(props){
        super(props);

        this.state = {
            product_id: this.props.product_id,
            active: 0
        };
    }


    render(){

        return (
            <ProductGrid tags={} />
        );
    }
}