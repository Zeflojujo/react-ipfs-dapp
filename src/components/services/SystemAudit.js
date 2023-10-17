import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/36.jpg";
import Footer from "../Footer";

function SystemAudit() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='System Auditing'
                text1 = 'As part of our Consultancy Services we offer Systems Audits to evaluate and improve on the effectiveness of a system. As a leader in software development, we understand vulnerabilities that applications harbor and through our offering of Vulnerability Assessment and Penetration Testing, we extend this knowledge and experience by providing application, network and wireless penetration testing services. We promote security awareness and skills through specialized training of personnel on our Security Capability Development program, which is a model that guarantees a complete organizational security awareness'
                text2 = 'DSG Technology is a leading system audit service provider and can help you address a wide range of system audit requirements. Our Magilatech system audit team is highly experienced and has a thorough understanding of all the system audit best practices. We can perform a thorough check of your systems to ensure that they are performing optimally and that you are getting the most from your investment and your IT systems.'
                header2 = 'Our DSG Technology system Audit Services'
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

export default SystemAudit