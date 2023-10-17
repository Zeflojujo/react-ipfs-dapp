import ContentService from './ContentService';
import Trip1 from "../../assets/44.jpg";
import ContentServiceData from './ContentServiceData';
import "./ContentServiceStyle.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContentServiceData2 from './ContentServiceData2';

function CustomDev() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Custom Software Development'
                text1 = 'Custom software applications that raised specific enterprise needs have become an imperative component of the technology landscape today as the limitations of packaged software become apparent. Businesses today are demanding tailor-made digital solutions that will help accelerate their growth.'
                text2 = "An elite team of tech genies at DSG Technology Company highly complex applications that deliver amazing UI and UX that help businesses engage with customers and tap into new markets. We add value to the customer experience by integrating into the custom software enhanced features like online messaging, searchable databases, online learning tools, product and process manuals, and thorough software documentation."
                header2 = 'Our Custom Software Development Services'
            />


            <ContentServiceData2
                header3 = 'Outsource Custom Software Development from DSG Technology'
                text1 = 'DSG Technology has been a leading custom software development service providing company. DSG Technologys customers range from mid-sized organizations to global industry leaders. Our software development services cover the full cycle of custom software development and include the development of enterprise applications, web applications, e-commerce solutions, web designs, content management solutions, and more.'
                text2 = 'Leverage DSG Technology thorough knowledge of technology components and software tools to meet your custom software requirements.'
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

export default CustomDev