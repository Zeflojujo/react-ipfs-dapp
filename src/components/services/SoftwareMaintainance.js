import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/45.jpg";
import Footer from "../Footer";

function SoftwareMaintainance() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Software Maintainance'
                text1 = 'Are you having complex legacy systems and applications from various acquisitions and mergers in need of maintenance and support? Is your IT department often reduced to acting like a helpdesk? Are they are overloaded with mundane maintenance and support of software applications, with no time for development and deployment of new software systems? If yes, outsource software maintenance and support to have more hours in a day and save big on hiring and operational costs.'
                text2 = "At Magilatech, we provide dedicated software maintenance and support services that will enable you to concentrate on your core business functions. We are a team of expert software professionals with diverse skills, a passion for the job, and over a decade's experience in the industry. We provide you with effective long-term continual maintenance and real-time support services for all your software requirements."
                header2 = "Software Maintenance & Support Services We Provide"
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

export default SoftwareMaintainance