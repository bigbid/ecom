import React, {Component} from "react";


export default class ProductPreview extends Component {

    constructor(props){
        super(props);

        this.state = {
            images: this.props.images? this.props.images : [],
            active: 0
        };

        this.selectImage = this.selectImage.bind(this);
    }

    componentDidMount(){
        console.log("Mounted Images");
        console.log(this.props)
    }

    componentDidReciveProps(props){
        this.state = {
            images: this.props.images
        };

        console.log(this.props.images)
    }

    selectImage(index){
        this.setState({
            active: index
        });
    }

    render(){
        let that = this;

        return (
            <div className="row">
                <div className="col-2">
                    {this.state.images.map(function (image, index) {
                        return (
                            <div key={index} style={{textAlign: "center", marginBottom: "10px"}}>
                                <img src={image} alt="" onClick={() => that.selectImage(index)} style={{maxWidth: "80%"}}/>
                            </div>
                        );
                    })}
                </div>
                <div className="col-8">
                    <img src={this.state.images[this.state.active]} alt="" style={{maxWidth: "100%"}}/>
                </div>
            </div>
        );
    }
}