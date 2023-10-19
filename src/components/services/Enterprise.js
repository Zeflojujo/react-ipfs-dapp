import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/34.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

function Enterprise() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Enterprise Application Development'
                text1 = 'We have over 8 years of experience in the development of customized software, business applications, and enterprise solutions for diverse business needs. We provide a wide range of EAD solutions for EAD or Enterprise Application Development facilitates the flow of information within different organizational levels by automating the back-office functions, thereby allowing the management to keep an eye on the KPIs in real-time. At DSG Technology Solutions, our two-tiered EAD solutions (on-premise software and cloud applications) delivered as a SaaS-based platform allow you to monitor and manage everything from supply chain to Inventory, Procurement, Finance and HR to other mission critical activities. Our software is designed to rapidly adapt to your business processes, thereby maximizing enterprise agility and profits.'
            />

            <ContentServiceData2
                header3 = "Our Enterprise Application Development Service at DSG Technology"
            />

            <ContentServiceData3
                head1 = "Supply Chain Management "
                head2 = "Service Management"
                head3 = "Financial Management "
                head4 = "Sales Management "
                head5 = "Production Management "
                head6 = "Customer Relationship Management "
                text1 = "Our DSG Technology EAD consultants have extensive supply chain management knowledge across wholesale and manufacturing distribution environments. From EAD selection to its implementation, we can help you with everything from inventory, material, and purchase to warehouse management."
                text2 = "Our DSG Technology EAD Service Management modules allow your customer support team to collaborate better and render timely after-sales support to your customers. We build a custom EAD solution based upon your needs, while ensuring there are no scheduling conflicts and the overall effectiveness of your sales team receives a substantial boost.Our service management offerings include contract and maintenance management, on-field and off-field service and tracking returns, amongst others."
                text3 = "Our DSG Technology EAD modules for Financial Management are designed for businesses that have complex requirements, but at the same time can be used by smaller organizations to increase general productivity. We integrate our EAD modules with all the revenue generating streams of your organization in a streamlined manner,can help you with General Ledger,Asset Management, Financial Reporting, Advanced Allocations, Accounts Receivable, Financial Planning, Accounts Payable, and Cash Management"
                text4 = "Our DSG Technology EAD module for Production Management is dedicated to managing your entire production process - from planning to scheduling and production order control. Our tightly integrated module ensures you always meet the delivery date promised to your customer. Our module takes care of everything from routine QA to Advanced Quality Management, ensuring lean production schedules and easy job management."
                text5 = "With the help of our EAD solutions for Sales Management, businesses can improve sales and their marketing effectiveness while retaining customers and gaining their loyalty. Our module provides real-time information on the available inventory and current order status, and allows for easier sales processes such as Tracking Shipments, Assisting Sales, Managing Orders, and POS Management."
                text6 = "Our DSG Technology EAD module for CRM constantly monitors and provides your sales and customer service team tools for initiating action and communicating effectively with your customers. By monitoring recent purchases and the customer's order frequency, and alerting your personnel in case of any decline in activity, we ensure peak efficiency for your CRM team. Our solution includes Mobile Solutions, Connecting with Customers, Managing Marketing Channels, Managing Leads, and Case Management"
            />

            <ContentServiceData2
                header3 = "Make DSG Technology Your Partner for Enterprise Application Development Services"
            />

            <ContentServiceData1
                text1 = "By deploying and implementing our time-tested EAD modules within your organization, you gain the ability to re-engineer your business processes and methodologies and align them with your organizational goals. This in turn will then lay the foundation for future growth, improved productivity, and higher cost-savings."
                text2 = "Contact us now to know more about our EAD expertise and the different kinds of projects we have successfully executed till date."
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

export default Enterprise