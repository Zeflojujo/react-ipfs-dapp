import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/48.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServiceData2";

function PenetrationTest() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Penetration Testing'
                text1 = 'A penetration test is a simulation of a hacker attack on a network, system, application or website used to discover existing weaknesses before hackers find and exploit them.We determine feasibility of an attack and the amount of business impact of a successful network compromise. We test and report all potential vulnerabilities both externally and internally that result from improper system configuration, hardware or software flaws and missing patches.'
                text2 = 'Any security issues that are found will be presented to the system owner together with an assessment of their impact and often with a proposal for mitigation or a technical solution.'
                text3 = 'Our network security assessment team’s approach addresses wide-ranging needs for our clients and we offer an in-depth and comprehensive penetration testing service that audit systems from an external or internal perspective.'
                text4 = 'External penetration testing - usually takes place across the Internet to simulate the view of your systems through the eyes of a potential attacker.'
                text5 = 'Internal penetration testing - enables a business to comprehensively evaluate how easily internal employees are able to access sensitive information.'
                header2 = 'What We Test at DSG Technology'
            />

            <ContentServiceData2
                header3 = "What you gain after Network Security Assessment / Penetration test"
                text1 = "Preventing financial loss through fraud (hackers, extortionists and disgruntled employees)"
                text2 = "Protecting your brand by avoiding loss of consumer confidence and business reputation."
                text3 = "Physical (access controls, dumpster diving etc.)."
                text4 = "Proving due diligence and compliance to your industry regulators, customers and shareholders."
                text5 = "Non-compliance can result in your organization losing business, receiving heavy fines, gathering bad PR or ultimately failing."
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

export default PenetrationTest