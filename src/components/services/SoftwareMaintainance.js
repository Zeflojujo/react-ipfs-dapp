import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/31.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServiceData2";

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
                text2 = "At DSG Technology, we provide dedicated software maintenance and support services that will enable you to concentrate on your core business functions. We are a team of expert software professionals with diverse skills, a passion for the job, and over a decade's experience in the industry. We provide you with effective long-term continual maintenance and real-time support services for all your software requirements."
                header2 = "Software Maintenance & Support Services We Provide"
            />

            <ContentServiceData2
                header3 = "Outsource Software Maintenance & Support Services to DSG Technology"
                text1 = "Our affordable software maintenance and support services ensure efficient project management and minimal software downtime. You can choose from our suite of software development services depending on your requirements in terms of support levels, pricing, and project delivery options; we guarantee you an efficient and hassle-free engagement. Revitalize your software infrastructure and prepare it for your future business future challenges by outsourcing your software maintenance and support services to DSG Technology."
            />

            {/* <ContentServiceData2
                header3 = ""
                text1 = ""
            /> */}



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

export default SoftwareMaintainance