import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/37.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

function Internet() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Internet & Mobile Banking Security Testing'
                text1 = 'DSG Technology is a team of professional cyber security testers with a tried-and-proven testing strategy for financial applications. Since 2012, we’ve completed dozens of projects across multiple industries, including core banking system testing projects. We’ve provided small, medium, and big enterprises with confidence and a stable application performance.'
                text2 = 'Our cyber security experts employ a combination of automated tests using the latest tools and technology along with manual testing and examination. We examine web and mobile applications used externally and internally and underlying databases (oracle mssql, postgres. etc) for any misconfigurations, vulnerabilities and test for web attacks.'
                header2 = ''
            />

            <ContentServiceData2
                header3 = "In DSG Technology We test across the full spectrum of potential vulnerabilities including the top threats identified by the Open Web Application Security Project (OWASP)"
            />

            <ContentServiceData1
                text1 = "Cross site scripting (XSS)"
                text2 = "Injection flaws."
                text3 = "Malicious file execution."
                text4 = "Insecure direct object reference"
                text5 = "Cross site request forgery (CSRF)"
                text6 = "Broken authentication and session management"
                text7 = "Insecure cryptographic storage"
                text8 = "Insecure communications"
            />

            <ContentServiceData2
                header3 = "Make DSG Technology Your Partner for Internet & Mobile Banking Security Testing"
            />

            <ContentServiceData1
                text1 = "Testing can’t be optional for banking applications as they deal with large volumes of confidential data. An error-prone app puts the users of the banking system at risk and endangers their financial assets. Through testing, a company owner can ensure that users will be able to freely perform transactions and check the status of a deposit or their account balance."
                text2 = "If you are looking for high-quality mobile banking security testing services, DSG Technology is the place to contact. With over 10 years of experience, we have a solid understanding of the banking domain and are familiar with the latest fintech industry standards. Take a look at our services to choose those your project could benefit from. To describe your software and find out more about the ways to test and optimize its performance, contact us."
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

export default Internet