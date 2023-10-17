import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/32.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServiceData2";

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
                text2 = 'Our DSG Technology forensic systems are designed for portability and power when you need work done at another location. Our investment in high speed processing systems and professional software give you an advantage to have your results processed more quickly than others.'
                header2 = 'At DSG Technology We Offer Computer Forensics Services'
            />

            <ContentServiceData2
                header3 = "Contact DSG Technology for Best Computer Forensics Services"
                text1 = "The Computer forensic examination of electronic systems has undoubtedly been a huge success in the identification of cyber and computer-assisted crime. Organisations are placing an increasing importance on the need to be equipped with appropriate incident management capabilities to handle misuse of systems."
                text2 = "As DSG Technology we can help you re-invent and reshape your legacy application to help you meet the demanding needs of the digital world. Our innovative solutions and cutting-edge technologies help us get through even the trickiest modernization challenges smoothly and efficiently. Having successfully remodeled thousands of business applications and served hundreds of global clients, our expert DSG Technology engineers have extensive computer forensics experience. Leveraging their business insight and practical knowledge, they can help you quickly revamp your disparate processes for sure-shot business success."
                text3 = "So, Get in touch! With data, applications, and business processes at the core, we can help you enhance your organization's computer forensics. Simply let us know your requirements and budget and we'll get in touch with you with a good computer forensic services. May you Get in touch with us."
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

export default ComputerForensic