import { Link } from "react-router-dom";
import "./ServiceStyles.css";

function ServiceData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="imageDefault"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <Link to={props.url}>READ MORE</Link>
        </div>
    )
}

export default ServiceData;