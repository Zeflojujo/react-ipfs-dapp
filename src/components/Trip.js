import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/44.jpeg";
import Trip2 from "../assets/49.jpg";
import Trip3 from "../assets/45.jpeg";

function Trip () {
    return (
        <div className="trip">
            <div className="heading">
                <h1>OUR SERVICES</h1>
                <p>We believe that our company's guiding principles of transparency, accountability and responsiveness are core to ensuring successful software develpment and cybersecurity services that help our clients increase revenue, drive innovation and boost social impact.</p>
            </div>
           
            <hr className="horizontalLine"/>

            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading = "Custom Software Development"
                    text = "Custom software applications that raised specific enterprise needs have become an imperative component of the technology landscape today as the limitations of packaged software become apparent"
                />
                <TripData
                    image={Trip2}
                    heading = "Mobile App Development"
                    text = "Are you looking to develop a professinal & innovative mobile app for your business ? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms..."
                />
                <TripData
                    image={Trip3}
                    heading = "Software maintanance"
                    text = "We proactively handle the maintenance of software to ensure that your software is bug-free at deployment. We follw the best application software maintenance practices to make your software robust and..."
                />
                {/* <TripData
                    image={Trip3}
                    heading = "System Integration"
                    text = "We offer API development and API integration services spanning a wide range of industries. We specialize in developing and integrating APIs for the Web, mobile applications and cloud. Our APIs integra..."
                /> */}
            </div>
        </div>
    )
}

export default Trip;