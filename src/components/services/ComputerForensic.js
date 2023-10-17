import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/32.jpg";
import Footer from "../Footer";

function ComputerForensic() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header = 'Computer Forensics'
                text1 = 'In DSG Technology we have track record combined with the latest forensic tools and technical expertise, security and investigations.'
                text2 = 'Our Magilatech forensic systems are designed for portability and power when you need work done at another location. Our investment in high speed processing systems and professional software give you an advantage to have your results processed more quickly than others.'
                header2 = 'At DSG Technology We Offer Computer Forensics Services'
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

export default ComputerForensic