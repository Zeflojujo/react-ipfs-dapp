
import image1 from "../assets/dsg3.jpg";
import image2 from "../assets/dsg2.jpg";
// import "./DestinationStyles.css";
// import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <>
            <div className="destination">
                <div className="heading">
                    <h1>We Are DSG Technology</h1>
                    <p>Helping Businesses disrupt, accelerate and scale from ideation to delivery, we build next-gen software solutions that drive innovation and social impact</p>
                </div>
            </div>

            <div className="container">
                <div className="main">

                    <div className="focusImage1">
                        <img alt="mainImage" src={image1} />
                    </div>
                    
                    <div className="focusImage2">
                        <img alt="mainImage2" src={image2} />
                    </div>
                    
                </div>      

            </div>
</>
    )
}

export default Destination;