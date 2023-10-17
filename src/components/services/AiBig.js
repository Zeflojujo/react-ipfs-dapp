import "./ContentServiceStyle.css";
import ContentService from './ContentService'
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/30.jpg";
import Footer from "../Footer";

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
                header2 = 'Artificial Intelligence Services and Solutions'
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

export default AiBig