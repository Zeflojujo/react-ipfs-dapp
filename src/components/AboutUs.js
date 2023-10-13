import "./AboutUsStyles.css";
import MainArea from "./MainArea";
import Focus from "./Focus";
import aboutImage from "../assets/34.jpg";

function AboutUs () {
    return (
        <>
        <div className="heading">
            <h1>ABOUT US</h1>
            <p>Leveraging advanced technologies to deliver scallable solutions </p>
            <p>that exceed expectations.</p>
        </div>
        {/* <hr className="horizontalLine"/> */}
        <div className="about-container">

            <div className="aboutImage">
                <img alt="about" src={aboutImage}/>
            </div>

            <div className="vision">
                <h1>Our Story</h1>
                <p>
                    In 2012, DSG TECHNOLOGY was founded with a clear mission to transform software development and cybersecurity solutions in Africa and beyond Since its inception, Magilatech has grown from a startup incubatee, to a high growth technology company serving clients across the globe.
                </p>

                <h1>In Software Development</h1>
                <p>
                    We address the evolving social and business technology challenges by defining, designing and developing applications tailored to meet our community's requirements.
                </p>

                <h1>In Cyber Security</h1>
                <p>
                    We provide comprehensive penetration testing, bulnerability assessment, malware analysis and cryptography services. Out state-of-the-art Cybersecurity Lab applies current research results to ensure the best protection of our products and clients.
                </p>
            </div>
            
            
        </div>

        <MainArea/>

        <Focus/>

        </>
        
    )
}

export default AboutUs;