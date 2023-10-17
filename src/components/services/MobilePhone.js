import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/40.jpg";
import Footer from "../Footer";

function MobilePhone() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Mobile Phone Forensics'
                text1 = 'The use of mobile devices has exploded in the modern-day and age. Thus, the use of Mobile Phone Forensics for investigations due to crimes and corporate espionage has also increased more than enough. Every device which stores data can be investigated via Mobile Phone Forensics.'
                text2 = 'Mobile Phone Forensics is the branch of forensic science which helps to analyze and detect electronic data. At Magilatech , our reliable and highest quality Mobile Phone Forensics investigation services help to investigate frauds, data thefts, and crimes of a digital nature.'
                header2 = 'What we Offer At Magilatech in Mobile Phone Forensics'
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

export default MobilePhone