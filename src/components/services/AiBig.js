import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService'
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/35.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

function AiBig() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='AI,Big Data & Machine Learning'
                text1 = 'We establish intelligent and influential solutions that are capable of strengthening functional efficiency and powering business growth.'
                text2 = 'Artificial Intelligence (AI), one of the latest technology trends that have stormed the business scenarios over the past few years. The technology enables computers to imitate human intelligence in a secure and reliable manner. Consequently, it unlocks new boundaries for businesses as they can take advantage of AI-driven applications to automate their business processes to drive advancement and efficiency.'
                text3 = 'We, at DSG Technology, believe in delivering top-rated performance to our clients by offering superior AI solutions which precisely meet their requirements and maximize their ROI (Return on Investment) by automating their business processes. Our skill set expands to the whole series of AI technologies including Machine Learning, Speech Recognition, Natural Language Processing, and more. We design powerful and influential solutions that combine smoothly with the client’s business model and stimulate its growth in every possible way.'
            />

            <ContentServiceData2
                header3 = "Artificial Intelligence Services and Solutions"
            />

            <ContentServiceData3
                head1 = "Strategy "
                head2 = "Development "
                head3 = "Customization "
                head4 = "Implementation "
                head5 = "Integration "
                text1 = "We have DSG Technology team of AI experts to assist your business to begin a transformational journey with the embracement of this advanced technology."
                text2 = "We have expansive knowledge in developing advanced AI applications that enable the businesses to automate a variety of their operations."
                text3 = "We are specialized in creating customized AI-driven solutions for our clients that are well suited to the unique requirements of their businesses and match the industry standards."
                text4 = "Our DSG Technology team of AI experts makes sure that these advanced solutions are implemented in a manner that they deliver maximum benefits."
                text5 = "We tender flawless integration of the advanced AI solutions into the existing business model of the client to maximize the ROI."
            />
            
            <ContentServiceData2
                header3 = "Our AI Solutions in DSG Technology"
            />

            <ContentServiceData1
                text1 = "DSG Technology Solutions provides AI Solutions help businesses gain superior and high-accuracy AI capabilities to clients from all over the world. Our team helps your businesses to utilize these capabilities to build extendable & cost-effective digital applications and minimize labor and infrastructure cost significantly. If you're looking for high-quality and cost-effective embedded software development services, get in touch with us today!"
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

export default AiBig