import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/36.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";

function Incidents() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Incidents Mananagement'
                text1 = 'We have set of procedures and actions taken to respond to and resolve critical incidents, as we identify, analyze, and correct hazards to prevent a future re-occurrence. Therefore the process of limiting the potential disruption caused by such an event, followed by a return to business as usual is what we do as we manage Incidents in DSG Technology.'
                header2 = ''
            />

            <ContentServiceData2
                header3 = "DSG Technology Incident Management supports the incident management process in the following ways"
            />

            <ContentServiceData3
                text1 = "1. Log incidents in the instance or by sending email."
                text2 = "2. Classify incidents by impact and urgency to prioritize work."
                text3 = "3. Assign to appropriate groups for quick resolution."
                text4 = "4. Escalate as necessary for further investigation."
                text5 = "5. Resolve the incident and notify the user who logged it."
                text6 = "6. Use reports to monitor, track, and analyze service levels and improvement."
            />


            <ContentServiceData2
                header3 = "Benefits of Incidents Management"
            />

            <ContentServiceData3
                head1 = "Restore services—automatically and fast "
                head2 = "Ignite agent productivity "
                head3 = "Boost employee productivity "
                head4 = "Increase incident deflection "
                text1 = "Bring together the right agents to manage work and collaborate using one platform for IT processes."
                text2 = "Assign incidents to the right groups for faster resolution with the help of machine learning"
                text3 = "Deliver a better experience with intuitive omni-channel self-service and two-way communication."
                text4 = "Incident deflection can come from providing an FAQ to our customers to read, a product forum for them to participate in, or just a solid, thorough library of information related to your products and services, which is available to your customers."
            />

            <ContentServiceData2
                header3 = "Features of Incident Management"
            />

            <ContentServiceData3
                head1 = "Single-pane agent view "
                head2 = "Native mobile app "
                head3 = "AI-powered insight "
                head4 = "Major incident management "
                text1 = "Give agents what they need in one place. Prioritize and resolve issues fast with AI recommendations."
                text2 = "Give IT agents a mobile interface to triage, address, and resolve incidents or requests on the go."
                text3 = "Accelerate incident resolution with built-in machine learning and contextual help to eliminate bottlenecks."
                text4 = "Use embedded, proven practice workflows to identify, track, and resolve high‑impact incidents."
            />

            <ContentServiceData2
                header3 = "Outsource Incidents Management services from DSG Technology"
            />

            <ContentServiceData1
                text1 = "Let DSG Technology unleash the true potential of your company and lead a successful incident management for reduced costs of operations and greater returns on your company's investments but also, Incident Management restores normal service operation while minimizing impact to business operations and maintaining quality. Schedule an appointment with one of our DSG Technology experts today and get more information on our Incidents Management."
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

export default Incidents