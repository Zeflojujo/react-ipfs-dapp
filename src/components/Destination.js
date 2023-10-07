import tour1 from "../assets/50.jpg";
import tour2 from "../assets/38.jpg";
import tour3 from "../assets/42.jpg";
import tour4 from "../assets/34.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <div className="heading">
                <h1>We Are Magilatech</h1>
                <p>Helping Businesses disrupt, accelerate and scale from ideation to delivery, we build next-gen software solutions that drive innovation and social impact</p>
            </div>
            
           <DestinationData
                className="first-des"
                heading="OUR CLIENTS"
                text="Tigo backup application has greatly helped our customers backup data through their mobile phones, I can't say enough abouyt how well it is tailored to the needs of TIGO customers, It is definitely one of the best movile apps that we have ever purchased for a long time. Thank you Magilatech it has been an honor working with you."
                img1={tour1}
                img2={tour2}
           />

           <DestinationData
                className="first-des-reverse"
                heading="OUR PRODUCTS"
                text="At Magilatech, we strive to deliver more than what is typically offered. It means more than just solutions we design and build. We are also connected to our customers and invested in their success. We understand that an enterprise can not afford to build a solution that only works today but must scale for tomorrow."
                img1={tour3}
                img2={tour4}
           />
        </div>
    )
}

export default Destination;