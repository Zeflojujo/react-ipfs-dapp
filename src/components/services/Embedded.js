import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/49.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServiceData2";

function Embedded() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            
            <ContentServiceData
                image={Trip1}
                header='Embedded Systems'
                text1 = "Are you looking for embedded software development solutions for things like industrial and home automation applications, embedded silicon, consumer electronics products, and GPS systems? Do you need a team to handle all or part of your architecting, prototyping, programming, and testing of your embedded software? If so, you have come to the right place."
                text2 = "DSG Technology is a leading embedded software development service provider and can help you with any of your embedded software development requirements. We have experience working with independent software vendors, semiconductor manufacturers, and manufacturers of embedded components, devices, and equipment to enhance the research and development cycle and drive new product development. We specialize in firmware and embedded software design. We have provided solutions for industrial and home automation, IoT, Telematics, M2M (Machine to Machine) solutions, device drivers, automotive embedded systems, Bluetooth, security solutions, and many more."
                header2 = 'Our Embedded Software Development Services'
            />

            <ContentServiceData2
                header3 = "Outsource Embedded Software Development Services to DSG Technology"
                text1 = "DSG Technology provides highly customized and high-quality embedded software development services to clients from all over the world. Our team uses the latest and best-embedded software tools and technologies to always provide cutting-edge services. Our dedication to quality and accuracy have also ensured that clients keep coming back to us for more. If you're looking for high-quality and cost-effective embedded software development services, get in touch with us today!"
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

export default Embedded