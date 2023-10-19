import "./ContentServiceStyle.css";
import ContentService from './ContentServices/ContentService'
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServices/ContentServiceData";
import Trip1 from "../../assets/30.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServices/ContentServiceData2";
import ContentServiceData1 from "./ContentServices/ContentServiceData1";
import ContentServiceData3 from "./ContentServices/ContentServiceData3";

function Annual() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Annual Maintainance Support'
                text1 = 'A common perception of maintenance is that it merely involves fixing defects. However, one study indicated that over 80% of maintenance effort is used for non-corrective actions. This perception is perpetuated by users submitting problem reports that in reality are functionality enhancements to the system. More recent studies put the bug-fixing proportion closer to 21%.'
            />

            <ContentServiceData2
                header3 = "DSG Technology offer an Annual Maintainance Support Services"
            />

            <ContentServiceData3
                head1 = "Incident management"
                head2 = "Asset management "
                head3 = "Project management "
                text1 = "Reduce outages, improve agent productivity, and manage the complete life cycle of services rendered."
                text2 = "Optimize asset utilization, avoid vulnerabilities, and ensure license compliance."
                text3 = "Create projects, manage resources, track progress, and integrate projects with requests and changes to fine-tune your overall IT service delivery."
            />

            <ContentServiceData2
                header3 = "In DSG Technology We provide Annual Maintainance Support"
            />
            <ContentServiceData1
                text1 = "Annual Maintainance Support is a very broad activity that includes error correction, enhancements of capabilities, deletion of obsolete capabilities, and optimization. Because change is inevitable, mechanisms must be developed for evaluation, controlling and making modifications with our innovation skills from heart in DSG Technology."
                text2 = "So, Any work done to maintain the defects is considered to be maintenance work. The purpose is to preserve the value. The value can be enhanced by expanding the customer base, meeting additional requirements, efficient and employing newer technology. Maintenance may span for 20 years. We assure you with good services please feel at peace and choose us to work with you!"
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

export default Annual