import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/43.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

function SoftwareReeng() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Software Re-engineering'
                text1 = "With time, the legacy applications that once gave your business an edge slowly become disparate and outdated. Your powerful digital assets, however beneficial they might have been, rely on complicated architectures and bring in huge maintenance costs and the risk of being associated with outdated or unsupported hardware and software, leading to reduced business efficiency and that's the biggest reason why they should be replaced immediately."
                text2 = 'At DSG Technology, we help you to carve your digital transformation journey. Leveraging our legacy application modernization services, we help organizations revamp their seasoned legacy applications to newer technologies that bring in unmatched agility and efficiency into their business processes. Our legacy application modernization specialists use their dedicated strategy and expert knowledge of application rationalization to scrap off all unnecessary parts and processes from your existing application and replace them with new, less expensive, and highly-scalable technology platforms that reduce operational risks and ensure definite business success.'
            />

            <ContentServiceData2
                header3 = "We Offer Software Re-engineering at DSG Technology"
            />

            <ContentServiceData3
                head1 = "Application Assessment and Planning "
                head2 = "Application Re-engineering & Re-Structuring "
                head3 = "Cloud Migration & Re-Hosting "
                head4 = "Application Re-containerization & Integration "
                text1 = "Our experts thoroughly investigate your existing application to understand its code, architecture, mining requirements, and develop a detailed business case around your legacy application to help you derive maximum value from your investment."
                text2 = "We use unique re-engineering tools and techniques to wrap your old codes and business logic into the most recent digital technologies and platforms to improve your application's performance, security, and response time. Depending on the need, we include a new database structure, modify your application platform, and/or change the entire software model to add the much-needed value and agility to your product."
                text3 = "Based on your unique business requirements, we quickly and efficiently migrate your legacy software and applications from your on-premises or old cloud infrastructure to a most recent and efficient cloud-based technology platform to upscale its functionalities and add more load-bearing capabilities. While doing so, we bring about minimum disruption to your ongoing business processes."
                text4 = "We pack the otherwise isolated parts of your apps into a single product to improve its workflow, increase performance, simplify process environment, boost your application's overall efficiency, reduce the resources required to run your applications, and streamline enterprise mobility."
            />

            <ContentServiceData2
                header3 = "Contact DSG Technology for Best Software Re-engineering Services"
            />

            <ContentServiceData1
                text1 = "As DSG Technology we can help you re-invent and reshape your legacy application to help you meet the demanding needs of the digital world. Our innovative solutions and cutting-edge technologies help us get through even the trickiest modernization challenges smoothly and efficiently. Having successfully remodeled thousands of business applications and served hundreds of global clients, our expert engineers have extensive software development and re-modeling experience. Leveraging their business insight and practical knowledge, they can help you quickly revamp your disparate processes for sure-shot business success."
                text2 = "So, let's get in touch! With data, applications, and business processes at the core, we can help you enhance your organization's digital transformation capabilities. Simply let us know your requirements and budget and we'll get in touch with you with a customized application modernization plan tailored to your specific needs. May you Get in touch with us."
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

export default SoftwareReeng