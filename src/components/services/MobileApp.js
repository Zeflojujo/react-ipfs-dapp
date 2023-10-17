import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/49.jpg";
import Footer from "../Footer";

function MobileApp() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Mobile App Development'
                text1 = "Are you looking to develop a professional & innovative mobile app for your business or create a gaming app? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms as well? Magilatech mobile app development services are here for you, For over a eight years, we have been developing numerous mobile applications for global clients belonging to different industries, helping their business move towards profitability, and can do the same for you."
                header2 = 'Why Choose Magilatech for Mobile App Development?'
            />



        </div>
        <div className='c-right'>
            <div className='above'>
                <h4>About</h4>
                <p>In 2012, DSG Technology was founded with a clear mission to transform software development and cybersecurity solutions in Africa and beyond. Since its inception, Magilatech has grown from a startup incubatee, to a high growth technology company serving clients across the globe.</p>
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