import { Component } from "react";
import tour1 from "../assets/37.jpg";
import tour2 from "../assets/38.jpg";
import tour3 from "../assets/47.jpg";
import tour4 from "../assets/34.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
    render() {
        return(
            <div className={this.props.className} >
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>
                   {this.props.text}
                </p>
            </div>

            <div className="image">
                <img alt="image" src={this.props.img1}/>
                <img alt="images" src={this.props.img2}/>
            </div>
        </div> 
        )
    }
}

export default DestinationData;