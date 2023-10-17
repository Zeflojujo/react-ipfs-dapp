import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/36.jpg";
import Footer from "../Footer";

function Incidents() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Incidents Mananagement'
                text1 = 'We have set of procedures and actions taken to respond to and resolve critical incidents, as we identify, analyze, and correct hazards to prevent a future re-occurrence. Therefore the process of limiting the potential disruption caused by such an event, followed by a return to business as usual is what we do as we manage Incidents in Magilatech.'
                header2 = 'DSG Technology Incident Management supports the incident management process in the following ways'
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

export default Incidents