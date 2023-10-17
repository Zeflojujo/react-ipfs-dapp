import "./ContentServiceStyle.css";
import ContentService from './ContentService';
import Navbar from "../Navbar";
import ContentServiceData from "./ContentServiceData";
import Trip1 from "../../assets/35.jpg";
import Footer from "../Footer";

function Fraud() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Fraud Investigation'
                text1 = 'DSG Technology team of Forensic and Certified Fraud Examiners conduct investigations on Computer fraud, employee embezzlement, kickback schemes and financial statement fraud. We use variety of tools and resources to uncover and correct illegal activities that can undermine the profitability of your business.'
                text2 = 'We work with many types of organizations including public and private entities, nonprofit organizations, governmental entities and a variety of industries. Our practice includes work with attorneys in both civil and criminal lawsuits.'
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

export default Fraud