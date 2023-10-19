import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/40.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";

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
                text2 = 'Mobile Phone Forensics is the branch of forensic science which helps to analyze and detect electronic data. At DSG Technology , our reliable and highest quality Mobile Phone Forensics investigation services help to investigate frauds, data thefts, and crimes of a digital nature.'
                header2 = ''
            />

            <ContentServiceData2
                header3 = "What we Offer At DSG Technology in Mobile Phone Forensics"
            />

            <ContentServiceData3
                head1 = "Dealing with Breaches in Security"
                head2 = "Data Protection and Recovery "
                head3 = "Training your Employees "
                head4 = "Impact Assessment "
                text1 = "The time following a breach in security is the most critical for any company. We help to make sure companies can limit the amount of damage that has been done. We also identify the causes of the breach and help to analyze what the next steps should be."
                text2 = "Data is currently one of the most important commodities for any business. Protecting it is critical and if lost, recovering it is of the utmost importance. We make sure that our clients are given the best service when it comes to recovering and protecting your data, ensuring there is an extra area which you will not have to worry about."
                text3 = "We make sure that your employees are capable of handling every situation and also help them to understand the need to install and maintain proper security measures. This also allows them to know about the correct investigative procedures."
                text4 = "If there is a security breach of any kind, our Mobile Phone forensics team helps to conduct an immediate thorough investigation into the damage and analyze what the possible fallouts could be from the said damage."
            />

            <ContentServiceData2
                header3 = "Benefits of DSG Technology in Mobile Phone Forensics"
            />

            <ContentServiceData1
                text1 = "We help to make sure that the network infrastructure has integrity and a proper amount of resilience"
                text2 = "We help to identify the increasing threats against security and make sure that you know about the vulnerabilities in the digital signature."
                text3 = "We help to mitigate the risks that are hugely present during sampling."
                text4 = "Our service makes sure that data is available from different sources so as to have a better idea of what has transpired by comparing them and providing a clearer picture."
                text5 = "We help to trend the relevant data at the correct time periods and analyze any fluctuations that occur for the possibility of risk."
                text6 = "Our service helps to capture the most important information in the case of a network breach. The data collected would allow you to be able to take court proceedings if required in any situation."
                text7 = "Our service ensures a more secure cyber environment for your business."
                text8 = "It is a good money-saving tactic as the detection and treatment of breaches are instantaneous."
                text9 = "We limit the loss of important data, making sure to protect it, and as a result, help to protect your reputation in front of your customers."
            />

            <ContentServiceData2
                header3 = "Why Choose DSG Technology for Mobile Phone Forensics Services?"
            />

            <ContentServiceData1
                text1 = "We provide our clients with flexible pricing options which will suit the client's business requirements and budget perfectly."
                text2 = "When you choose to partner with us, we will assign a dedicated project manager to every client. This manager will be the single point of contact for all your queries and issues."
                text3 = "We have access to the best infrastructure in terms of uninterrupted connectivity, the latest tools and technologies, and world-class workspaces."
                text4 = "We help to provide detailed and advanced forensic analysis of mobile devices and software applications, computers, and any network communications which are key to your IT infrastructure."
                text5 = "Our DSG Technology team of experts and professionals are active when it comes to identifying the occurrence of any malicious activity in your IT environment by analyzing traffic and other the network host."
                text6 = "DSG Technology assists law enforcement agencies and government organizations in solving criminal cases which involve computers and other networking devices such as mobiles. Our aim is to solve cases in the shortest amount of time."
                text7 = "We make sure that any damage caused to your enterprise's operations and any security incidents are minimized. We help you to deal with cyber-attacks or even in an active manner to protect your company."
            />

            <ContentServiceData2
                header3 = "Outsource Mobile Phone Forensics Services to DSG Technology"
            />

            <ContentServiceData1
                text1 = "Have you lost sensitive data to hackers? Do you suspect an employee has copied your customer details and started a competitive business? Whatever the reason, if you need a reliable and affordable Mobile Phone forensics service provider, DSG Technology is your answer."
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

export default MobilePhone