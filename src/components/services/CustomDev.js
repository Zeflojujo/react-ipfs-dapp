import ContentService from './ContentService';
import Trip1 from "../../assets/44.jpg";
import ContentServiceData from './ContentServiceData';
import "./ContentServiceStyle.css";
import Navbar from '../Navbar';

function CustomDev() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Custom Software Development'
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
    </>
  )
}

export default CustomDev