import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/40.jpg";
import Footer from "../Footer";
import ContentServiceData2 from "./ContentServiceData2";

function SystemInte() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='System Intergration'
                text1 = "Your enterprise ecosystem depends highly on the functioning of your applications and their subsequent interaction with other legacy applications. Your company needs an agile environment for seamless sharing of data and information through applications for business operations to run smoothly. This can be achieved only when your enterprise applications are efficiently integrated and perform at par with the required standards. The growing IT ecosystem complexities within your enterprise, complicated hybrid approaches, availability of a multitude of cloud system versions, high costs of application management, etc., are roadblocks in the effective working of your enterprise application integration model. These problems can be resolved when you have an expert managing it all for you."
                header2 = "Why choose DSG Technology to Outsource Application Integration Services?"
            />

            <ContentServiceData2
                header3 = "Outsource Application Integration Services from Magilatech"
                text1 = "Let Magilatech unleash the true potential of your enterprise and lead a successful application transformation for reduced costs of operations and greater returns on your company's investments. With an innovative and bold approach towards business application integration, our team of expert designers and developers offer leading-edge ideas and solutions to scale-up your business performance through streamlined and integrated internal applications, databases, and processes. Schedule an appointment with one of our experts today and get more information on our specialized enterprise application integration services."
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

export default SystemInte