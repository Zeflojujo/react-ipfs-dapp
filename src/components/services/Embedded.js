import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/49.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";

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
            />

            <ContentServiceData2
                header3 = "Our Embedded Software Development Services"
            />

            <ContentServiceData3
                head1 = "Embedded Software Programming Services "
                head2 = "Embedded Technology Proficiency "
                head3 = "Hardware Programming Expertise "
                head4 = "Embedded Linux Proficiency "
                text1 = "Our company and embedded software experts provide end-to-end programming services for many different kinds of device drivers, microcontrollers and microprocessors, IoT and M2M devices, human interface devices, and many more. We also help with data exchange between embedded software and external systems."
                text2 = "Our DSG Technology expert developers have expertise in all things related to embedded software, including high proficiency in languages such as embedded C and C++, Java, Python etc. We work with most of the popular architectures, such as ARM, 8051, X86-64, and also have a deep understanding of the common embedded protocols, standards, and interfaces."
                text3 = "We program a range of hardware, right from rudimentary devices to more complex industrial equipment. We have worked with network equipment, medical equipment, laboratory equipment, digital signage, and POS terminals, among others. We also develop mobile apps to control various kinds of hardware."
                text4 = "We are well versed with the Linux kernel and tech stack and have harnessed its power to program many different advanced systems related to industrial automation, consumer electronics, and IoT and M2M solutions."
            />

            <ContentServiceData2
                header3 = "Outsource Embedded Software Development Services to DSG Technology"
            />

            <ContentServiceData1
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