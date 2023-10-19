import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/39.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

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
            />

            <ContentServiceData2
                header3 = "As DSG Technology We Offer these types of Vulnerability Assessment"
            />

            <ContentServiceData3
                head1 = "Host assessment "
                head2 = "Network and wireless assessment "
                head3 = "Database assessment "
                head4 = "Application scans "
                text1 = "The assessment of critical servers, which may be vulnerable to attacks if not adequately tested or not generated from a tested machine image."
                text2 = "The assessment of policies and practices to prevent unauthorized access to private or public networks and network-accessible resources."
                text3 = "The assessment of databases or big data systems for vulnerabilities and misconfigurations, identifying rogue databases or insecure dev/test environments, and classifying sensitive data across an organization’s infrastructure."
                text4 = "The identifying of security vulnerabilities in web applications and their source code by automated scans on the front-end or static/dynamic analysis of source code."
            />

            <ContentServiceData2
                header3 = "What are the benefits of a Vulnerability Assessment"
            />

            <ContentServiceData3
                head1 = "Asset Visibilty"
                head2 = "Defensive Controls "
                head3 = "Cyber Security Planning "
                head4 = "Vulnerabilities Support "
                text1 = "Understand how vulnerable your assets are to a cyber-attack by analysing your network and classify IT systems and data."
                text2 = "Review the capability of your external and internal technology defences to detect, manage and repel the latest cyber threats."
                text3 = "Prioritise the greatest cyber security risks to your business for superior allocation of cyber-defence resources."
                text4 = "We help remediate vulnerabilities, supporting your organisation and limiting the damage of a data breach"
            />

            <ContentServiceData2
                header3 = "Outsource Vulnerability Assessment Services from DSG Technology"
            />

            <ContentServiceData1
                text1 = "Let DSG Technology unleash the true potential of your company and lead a successful application transformation for reduced costs of operations and greater returns on your company's investments. Our team of expert is ready to give all Vulnerability Assessment services. Schedule an appointment with one of our experts today."
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

export default Vulnerabilities