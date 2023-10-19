import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/51.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

function MobileApp() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Mobile App Development'
                text1 = "Are you looking to develop a professional & innovative mobile app for your business or create a gaming app? Or do you have a mobile app on one platform and want to expand your reach by developing an app on other platforms as well? DSG Technology mobile app development services are here for you, For over a eight years, we have been developing numerous mobile applications for global clients belonging to different industries, helping their business move towards profitability, and can do the same for you."
            />

            <ContentServiceData2
                header3 = "Why Choose DSG Technology for Mobile App Development?"
            /> 

            <ContentServiceData3
                head1 = "Dedicated Team:"
                head2 = "Lean Development Phase: "
                head3 = "End-to-End Solutions: "
                head4 = "Competitive Pricing: "
                head5 = "Transparency: "
                text1 = "Before starting a project, we assemble a team which fits your exact requirements and works dedicatedly on your project. Our DSG Technology developers have a lot of experience and are expertise in mobile application development."
                text2 = "Software development is a dynamic process, and it is impossible to anticipate each and every scenario that might occur during development. However, years of domain expertise, presence of an experienced team and our reliance on proven development methodologies ensures delivery of a high quality mobile application at all times."
                text3 = "Developing a mobile application is only a part of the process. At DSG Technology, based upon our clients requirements, we can also provide on-going support for apps including regular maintenance and updates so as to engage as well as drawn-in new users."
                text4 = "Our services are highly cost-effective and reliable, ensuring you receive the highest return on your investment with the help of a feature-complete mobile app delivered within the requested time period."
                text5 = "From regular Skype/conference calls, email updates, daily status reports, and even onsite visits if necessary, our dedicated project managers ensure you are always kept within the loop during each and every stage of the product development cycle. As a result, the final build of the mobile application is always as per your requirements."
            />

            <ContentServiceData2
                header3 = "Outsource Mobile App Development"
            />  

            <ContentServiceData1
                text1 = "At DSG Technology, we follow industry best practices and offer you nothing but the best services, while still maintaining considerably low development costs as compared to our competitors. We have talented team mobile app developers, streamlined 8-step mobile app development processes, and more importantly, the ability to scale up to meet your demands. Outsource mobile app development to us and get access to a series of benefits."
                text2 = "Get in touch with us now, and see for yourselves how our mobile application development services can help you expand your customer base, grow your business, and reach out to whole new demographics in as short a time as possible."
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

export default MobileApp;