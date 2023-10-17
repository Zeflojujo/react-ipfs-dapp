import ServiceData from "./ServiceData";
import "./ServiceStyles.css";
import Trip1 from "../assets/44.jpg";
import Trip2 from "../assets/49.jpg";
import Trip3 from "../assets/45.jpg";
import Trip4 from "../assets/51.jpg";
import Trip5 from "../assets/33.jpg";
import Trip6 from "../assets/52.jpg";

function Services () {
    return (
        <div className="trip">
            <div className="heading">
                <h1>OUR SERVICES</h1>
                <p>We believe that our company's guiding principles of transparency, accountability and responsiveness are core to ensuring successful software develpment and cybersecurity services that help our clients increase revenue, drive innovation and boost social impact.</p>
            </div>

            <hr className="horizontalLine"/>

            <div className="tripcard">
                <ServiceData
                    image={Trip1}
                    heading = "Custom Software Development"
                    text = "Custom software applications that raised specific enterprise needs have become an imperative component of the technology landscape today as the limitations of packaged software become apparent"
                    url="/CustomDev"
                />
                <ServiceData
                    image={Trip2}
                    heading = "Mobile App Development"
                    text = "Are you looking to develop a professinal & innovative mobile app for your business ? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms..."
                    url="/MobileApp"
                />
                <ServiceData
                    image={Trip5}
                    heading = "Embedded System"
                    text = "Are you looking for embedded software development solutions for things like industrial and home automation applications, embedded silicon, consumer electronics products, and GPS systems? Do you need..."
                    url = "/Embedded"
                />
                
            </div>
            <div className="tripcard2">
            <ServiceData
                    image={Trip3}
                    heading = "Software maintanance"
                    text = "We proactively handle the maintenance of software to ensure that your software is bug-free at deployment. We follw the best application software maintenance practices to make your software robust and..."
                    url="/SoftwareMaintainance"
                />
            <ServiceData
                    image={Trip4}
                    heading = "System Integration"
                    text = "We offer API development and API integration services spanning a wide range of industries. We specialize in developing and integrating APIs for the Web, mobile applications and cloud. Our APIs integra..."
                    url="/SystemInte"
            />
            
            <ServiceData
                image={Trip6}
                heading = "Penetration Testing"
                text = "We conduct both internal and external penetration testing. To detect hidden systems flaws during penetration testing, we act like external attackers, trying to bypass protection measures and break int..."
                url = "/PenetrationTest"
            />
            </div>
        </div>
    )
}

export default Services;