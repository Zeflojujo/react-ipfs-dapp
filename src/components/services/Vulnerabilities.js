import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/38.jpg";
import Footer from "../Footer";

function Vulnerabilities() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Vulnerability Assessment'
                text1 = 'With thousands of known vulnerabilities in your systems and countless unknown risks; defensive technologies such as anti-virus and firewalls alone are not enough to stop these attacks. Moreover, as you frequently make changes to networked computing environments in response to customer needs, you are inadvertently weakening your security posture by providing cybercriminals with new ways in.'
                text2 = 'Any security issues that are found will be presented to the system owner together with an assessment of their impact and often with a proposal for mitigation or a technical solution.'
                text3 = 'Our network security assessment team’s approach addresses wide-ranging needs for our clients and we offer an in-depth and comprehensive penetration testing service that audit systems from an external or internal perspective.'
                text4 = 'Vulnerability assessment services are designed to identify security holes within an organization’s IT infrastructure, specifically related to cyber threats. Vulnerability assessment providers run a series of diagnostics on company devices, applications, and networks, and utilize this data to recommend areas for improvement based on urgency and scope. These providers often then suggest the ideal cybersecurity services and IT software, in addition to device or process upgrades, to help address each vulnerability and ensure maximum security across the organization. Businesses can work with these providers in conjunction with threat intelligence services to provide a complete, up-to-date picture of internal security health and potential risks to company data and devices.'
                header2 = 'As DSG Technology We Offer these types of Vulnerability Assessment'
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

export default Vulnerabilities