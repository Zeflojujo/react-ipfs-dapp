import image1 from "../assets/5.jpg"
import image2 from "../assets/6.jpg";

function Focus () {
    return (
        <>
            <div className="container">
            <div className="heading">
                <h2>OUR MAIN AREA OF FOCUS</h2>
            </div>
            <div className="main">

                <div>
                    <img alt="mainImage" src={image1} />

                    <div className="mainHeading1">
                        <h4>Software Development</h4>
                        <p>We offer a wide range of customized services in mobile apps, web apps, enterprise application, AR-VR development and much more.</p>
                    </div>
                </div>
                
                <div>
                    <img alt="mainImage2" src={image2} />

                    <div className="mainHeading2">
                        <h4>Cyber Security</h4>
                        <p>We are offering a comprehensive renge of cyber security services to help organizations protect their valuable assets.</p>
                    </div>
                    
                    </div>
                
            </div>      
            
        </div>
        </>
    )
}
export default Focus;