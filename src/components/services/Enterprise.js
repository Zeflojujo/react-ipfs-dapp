import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/34.jpg";
import Footer from "../Footer";

function Enterprise() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Enterprise Application Development'
                text1 = 'We have over 8 years of experience in the development of customized software, business applications, and enterprise solutions for diverse business needs. We provide a wide range of EAD solutions for EAD or Enterprise Application Development facilitates the flow of information within different organizational levels by automating the back-office functions, thereby allowing the management to keep an eye on the KPIs in real-time. At Magilatech Solutions, our two-tiered EAD solutions (on-premise software and cloud applications) delivered as a SaaS-based platform allow you to monitor and manage everything from supply chain to Inventory, Procurement, Finance and HR to other mission critical activities. Our software is designed to rapidly adapt to your business processes, thereby maximizing enterprise agility and profits.'
                header2 = 'Our Enterprise Application Development Service at Magilatech'
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

export default Enterprise