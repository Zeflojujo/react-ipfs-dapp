import "./AboutUsStyles.css";
import image1 from "../assets/5.jpg"
import image2 from "../assets/6.jpg";

function AboutUs () {
    return (
        <>
        <div className="heading">
            <h1>ABOUT US</h1>
            <p>Leveraging advanced technologies to deliver scallable solutions that exceed expectations.</p>
        </div>
        <hr className="horizontalLine"/>
        <div className="about-container">
            
            <h1>Our Story</h1>
            <p>
                In 2012, Magilatech was founded with a clear mission to transform software development and cybersecurity solutions in Africa and beyond Since its inception, Magilatech has grown from a startup incubatee, to a high growth technology company serving clients across the globe.
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

        <div className="main-focus">
            <h1>OUR MAIN AREA OF FOCUS</h1>
            <div>
                <img alt="mainImage" src={image1} />
                <h4>Software Development</h4>
                <p>We offer a wide range of customized services in mobile apps, web apps, enterprise application, AR-VR development and much more.</p>
            </div>

            <div>
                <img alt="mainImage2" src={image2} />
                <h4>Cyber Security</h4>
                <p>We are offering a comprehensive renge of cyber security services to help organizations protect their valuable assets.</p>
            </div>
            
        </div>

        </>
        
    )
}

export default AboutUs;