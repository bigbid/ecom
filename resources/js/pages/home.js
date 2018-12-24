import React, {Component} from "react";
import ProductGrid from "../components/productGrid";


export default class Home extends Component {




    render() {
        return (
            <div className="row">
                <div className="col-2" style={{borderRight: "1px solid #cccccc"}}>
                    Left
                </div>
                <div className="col-10">
                    <ProductGrid search={this.props.match.params.query}/>
                </div>
            </div>
        );
    }

}