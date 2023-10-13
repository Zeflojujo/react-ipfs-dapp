import "./AboutUsStyles.css";
import ProductsData from "./ProductsData";

import Trip1 from "../assets/30.jpg";
import Trip2 from "../assets/36.jpg";
import Trip3 from "../assets/37.jpg";
import Trip4 from "../assets/34.jpg";
import Trip5 from "../assets/38.jpg";
import Trip6 from "../assets/39.jpg";

function Products () {
    return (
        <div className="trip">
        <div className="heading">
            <h1>OUR DIGITAL SOLUTIONS</h1>
            <p>At DSG Technology, We strive to deliver more than what is typically offered. It means more than just solutions we design and build. We are also connected to our customers and invested in their success. We understand that an enterprise can not afford to build a solution that only works today byt must scale for tomorrow.</p>
        </div>
        <hr className="horizontalLine"/>

        <div className="tripcard">
                <ProductsData
                    image={Trip1}
                    heading = "Research Management System"
                    text = "A web based plaform through which information about research projects and researchers is managed. This is a project that we implemented for the Tanzania Commission for Science and Technology (COSTECH..."
                />
                <ProductsData
                    image={Trip2}
                    heading = "MyWorth"
                    text = "A saving groups application that aims to support communities from poor countries to become financially literate and promote women empowerment. The application includes a mobile e-ledger and simplified..."
                />
                <ProductsData
                    image={Trip3}
                    heading = "COSTECH Research Repository"
                    text = "A web based platform we implemented for the Tanzania Commission for Science and Technology (COSTECH); whose main objective was to provide means to interlink the COSTECH IR with other institutional dat..."
                />
                
            </div>
            <div className="tripcard2">
            <ProductsData
                    image={Trip4}
                    heading = "Local Government Revenue Collection"
                    text = "Local Government Revenue Information System that facilitate revenue collection for local government authorities. Local Government Revenue Information System (LGRCIS), the system for revenue collection..."
            />
            <ProductsData
                image={Trip5}
                heading = "Automated Pensioner Payment Verification System"
                text = "A platform that validate pensioners for payment. The platform uses biometric inputs to validate pensioners and automate payments upon validation..."
            />
            <ProductsData
                image={Trip6}
                heading = "System Integration"
                text = "We offer API development and API integration services spanning a wide range of industries. We specialize in developing and integrating APIs for the Web, mobile applications and cloud. Our APIs integra..."
            />
            </div>
        </div>
        
    )
}

export default Products;