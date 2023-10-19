import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/31.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

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
            />

            <ContentServiceData2
                header3 = "Software Maintenance & Support Services We Provide"
            />

            <ContentServiceData3
                head1 = "Adaptive Maintenance and Support: "
                head2 = "Corrective Maintenance and Support: "
                head3 = "Perfective Maintenance and Support "
                head4 = "Preventive Maintenance "
                head5 = "Upgrades "
                head6 = "Migration "
                head7 = "Support"
                head8 = "Maintenance"
                head9 = "Enhancements"
                head10 = "Other Support Services "
                text1 = "We can help you make the necessary modifications and revisions to your software for the transformational needs of your business. Here is an overview of what we do as part of application software maintenance - Data format change, Localization and regulation change, Hardware configuration change, Support Utility Modification, and Operating system integration."
                text2 = "We help you fix errors in your software system, whether they are logical errors, coding errors, or design errors. Moreover, we investigate any bug that may arise in your software algorithms."
                text3 = "Constant upkeep and special attention are needed to make the most of the technology for your business. We examine your software thoroughly for modifications, rectifications, editing, deletions, additions, and enhancements that it may need, and take necessary action."
                text4 = "Proactive and Preventive - that is how we define the efficiency of our application software maintenance services. Based on customer feedback and past incidents, we prepare your software for future requirements of your business"
                text5 = "Software Version Upgrades & Functionality Upgrades"
                text6 = "Database Migration & Language Migration"
                text7 = "Post-release Support, Operational and Helpdesk Support"
                text8 = "Packaged Software Maintenance, Website Maintenance, Custom Application Maintenance, Long-term Maintenance"
                text9 = "Application Enhancements & Performance Enhancements"
                text10 = "Porting, Software Re-engineering, Request Based Software Services, Bug Fixes, Defect Resolution, Change Request Handling, Configuration management, Status Reports are some of the other application software maintenance and support services that DSG Technology can provide."
            />

            <ContentServiceData2
                header3 = "Outsource Software Maintenance & Support Services to DSG Technology"
            />

            <ContentServiceData1
                text1 = "Our affordable software maintenance and support services ensure efficient project management and minimal software downtime. You can choose from our suite of software development services depending on your requirements in terms of support levels, pricing, and project delivery options; we guarantee you an efficient and hassle-free engagement. Revitalize your software infrastructure and prepare it for your future business future challenges by outsourcing your software maintenance and support services to DSG Technology."
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

export default SoftwareMaintainance