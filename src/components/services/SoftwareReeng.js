import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/43.jpg";
import Footer from "../Footer";

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
                header2 = 'We Offer Software Re-engineering at Magilatech'
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

export default SoftwareReeng