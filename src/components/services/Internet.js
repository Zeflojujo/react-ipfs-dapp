import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/37.jpg";
import Footer from "../Footer";

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
                header2 = 'In Magilatech We test across the full spectrum of potential vulnerabilities including the top threats identified by the Open Web Application Security Project (OWASP)'
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

export default Internet