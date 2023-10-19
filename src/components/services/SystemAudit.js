import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/52.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

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
                text2 = 'DSG Technology is a leading system audit service provider and can help you address a wide range of system audit requirements. Our DSG Technology system audit team is highly experienced and has a thorough understanding of all the system audit best practices. We can perform a thorough check of your systems to ensure that they are performing optimally and that you are getting the most from your investment and your IT systems.'
                header2 = 'Our DSG Technology system Audit Services'
            />

            <ContentServiceData2
                header3 = "Our DSG Technology system Audit Services"
            />

            <ContentServiceData3
                head1 = "System Infrastructure Controls Audit "
                head2 = "IT General Controls Audit "
                head3 = "IT Compliance Analysis "
                head4 = "Comprehensive system Audit "
                text1 = "Our DSG Technology system audit team will examine all the controls within your firm's IT infrastructure. During this process, we will evaluate the overall functioning of your IT control environment to ensure that the system has been properly set up to preserve the confidentiality and integrity of your critical systems and data. Our team will work closely with you to ensure that the system audit process is both cost-effective and performed within a quick turnaround time."
                text2 = "Here, we evaluate and analyze the controls related to your IT infrastructure. Our system audit team will analyze your information systems policies, controls, and infrastructure to ensure that mission-critical systems and data are available, confidential, and have integrity. The scope of the audit is based on the size and scope of your firm's operations, but we analyze and evaluate three main control domains - protective controls, detective controls, and corrective controls."
                text3 = "In our compliance review, we examine your firm's existing controls, methods, and policies and compare them against industry best practices and regulations related to cyber and information security. With our services, you can understand whether your IT policies and systems adhere to state, federal, and industry guidelines. We also identify gaps in your IT deployment, suggest areas of improvement, and offer solutions on how to bring your business into compliance."
                text4 = "We will perform a comprehensive and in-depth system audit and provide an system audit report that presents a complete picture of the state of your Servers, Laptops and Desktops, Network and Security, Applications, Licensing Hosting, Internet Access, Backup and Disaster Recovery, Telephony, IT Team, and IT Suppliers and Costs"
            />

            <ContentServiceData2
                header3 = "Why Outsource system Audit Services to DSG Technology?"
            />

            <ContentServiceData3
                head1 = "Cost-effective Pricing "
                head2 = "Data Security "
                head3 = "High-quality Services "
                head4 = "World-class Infrastructure "
                head5 = "Quick Turnaround Time "
                head6 = "Expert Team "
                text1 = "We provide our system audit solutions at extremely affordable prices, providing you with significant cost savings."
                text2 = "Being a leading system audit service providing company, we take the security of your data extremely seriously."
                text3 = "Our guarantee is that you will always receive the highest quality and personalized system audit services when you outsource to us."
                text4 = "Our DSG Technology system audit team works out of world-class offices that house the latest infrastructure facilities and amenities, enabling them to provide world-class services."
                text5 = "It is always a milestone for us to deliver our system audit services ahead of schedule and within budget."
                text6 = "Our DSG Technology system audit team is comprised of highly experienced technology professionals that have significant experience in providing a range of system audit services."
            />

            <ContentServiceData2
                header3 = "Outsource System Audit Services to DSG Technology"
            />

            <ContentServiceData1
                text1 = "DSG Technology provides highly customized and robust system audit services to clients from across the world. Our system audit team is highly experienced and versatile when it comes to providing customized system audit services and are fully aware of all the ongoing developments in the system audit field. We work closely with our clients to determine the best system audit strategy that is both cost-effective and timely. If you're looking for high-quality and robust system audit services, get in touch with us today!"
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

export default SystemAudit