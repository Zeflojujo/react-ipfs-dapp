import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/51.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServiceData2";

function MobileApp() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Mobile App Development'
                text1 = "Are you looking to develop a professional & innovative mobile app for your business or create a gaming app? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms as well? DSG Technology mobile app development services are here for you, For over a eight years, we have been developing numerous mobile applications for global clients belonging to different industries, helping their business move towards profitability, and can do the same for you."
                header2 = 'Why Choose DSG Technology for Mobile App Development?'
            />


            <ContentServiceData2
                header3 = "Outsource Mobile App Development"
                text1 = "At DSG Technology, we follow industry best practices and offer you nothing but the best services, while still maintaining considerably low development costs as compared to our competitors. We have talented team mobile app developers, streamlined 8-step mobile app development processes, and more importantly, the ability to scale up to meet your demands. Outsource mobile app development to us and get access to a series of benefits."
                text2 = "Get in touch with us now, and see for yourselves how our mobile application development services can help you expand your customer base, grow your business, and reach out to whole new demographics in as short a time as possible."
            />


        </div>
        <div className='c-right'>
            <div className='above'>
                <h4>About</h4>
                <p>In 2012, DSG Technology was founded with a clear mission to transform software development and cybersecurity solutions in Africa and beyond. Since its inception, DSG Technology has grown from a startup incubatee, to a high growth technology company serving clients across the globe.</p>
            </div>

            <div className='below'>
                <ContentService/>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default MobileApp;