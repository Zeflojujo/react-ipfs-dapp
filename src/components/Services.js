import ServiceData from "./ServiceData";
import "./ServiceStyles.css";
import Trip1 from "../assets/44.jpg";
import Trip2 from "../assets/49.jpg";
import Trip3 from "../assets/35.jpg";
import Trip4 from "../assets/51.jpg";
// import Trip5 from "../assets/33.jpg";
import Trip6 from "../assets/48.jpg";
import Trip7 from "../assets/31.jpg";
import Trip8 from "../assets/39.jpg";
import Trip9 from "../assets/32.jpg";
import Trip10 from "../assets/40.jpg";

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
                    url="/custom"
                />
                <ServiceData
                    image={Trip4}
                    heading = "Mobile App Development"
                    text = "Are you looking to develop a professinal & innovative mobile app for your business ? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms..."
                    url="/mobile-app"
                />
                <ServiceData
                    image={Trip2}
                    heading = "Embedded System"
                    text = "Are you looking for embedded software development solutions for things like industrial and home automation applications, embedded silicon, consumer electronics products, and GPS systems? Do you need..."
                    url = "/embedded"
                />
                
            </div>
            <div className="tripcard2">
            <ServiceData
                    image={Trip3}
                    heading = "AI,Big Data & Machine Learning"
                    text = "We establish intelligent and influential solutions that are capable of strengthening functional efficiency and powering business growth..."
                    url="/AiBig"
                />
            <ServiceData
                    image={Trip10}
                    heading = "System Integration"
                    text = "We offer API development and API integration services spanning a wide range of industries. We specialize in developing and integrating APIs for the Web, mobile applications and cloud. Our APIs integra..."
                    url="/intergration"
            />
            
            <ServiceData
                image={Trip6}
                heading = "Penetration Testing"
                text = "We conduct both internal and external penetration testing. To detect hidden systems flaws during penetration testing, we act like external attackers, trying to bypass protection measures and break int..."
                url = "/penetration-test"
            />
            </div>
            <div className="tripcard2">
            <ServiceData
                    image={Trip7}
                    heading = "Software maintanance"
                    text = "We proactively handle the maintenance of software to ensure that your software is bug-free at deployment. We follw the best application software maintenance practices to make your software robust and..."
                    url="/maintainance"
                />
            <ServiceData
                    image={Trip8}
                    heading = "Vulnerability Assessment"
                    text = "With thousands of known vulnerabilities in your systems and countless unknown risks; defensive technologies such as anti-virus and firewalls alone are not enough to stop these attacks. Moreover, as you..."
                    url="/vulnerability"
            />
            
            <ServiceData
                image={Trip9}
                heading = "Computer Forensics"
                text = "In DSG Technology we have track record combined with the latest forensic tools and technical expertise, security and investigations and Our DSG Technology forensic systems are designed for portability..."
                url = "/computer-forensics"
            />
            </div>
        </div>
    )
}

export default Services;