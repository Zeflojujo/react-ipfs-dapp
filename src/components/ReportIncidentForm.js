import "./ReportIncidentStyles.css";
import "./AboutUsStyles.css";

function ReportIncidentForm () {
    return (
        <>
            <div className="heading">
                <h1>REPORT AN INCIDENT</h1>
                <p>We respect your privacy and Keep your data completely confidential.</p>
            </div>
            <hr className="horizontalLine"/>

            <div className="form-container">
                <form className="form">
                    <span>What has happened ?</span>
                    <select placeholder="Choose an incident type">
                        <option>Choose an incident type</option>
                        <option>Money Theft</option>
                        <option>Fraud</option>
                        <option>Malware</option>
                        <option>Intrusion</option>
                    </select>

                    <span>Describe the Details</span>
                    <textarea placeholder="Describe the Details" rows={4}></textarea>
                    <div className="wide">
                        <div className="first-half">
                            <span>Email Address</span>
                            <input className="input1" placeholder="Email Address"/>
                        </div>
                        <div className="second-half">
                            <span>Mobile Phone</span>
                            <input className="input2" placeholder="Mobile Phone"/>
                        </div>
                    </div>

                    <span>Organization Name (optional)</span>
                    <input placeholder="Organization Name (optional)"/>
                    <button>Submit Incident</button>
                </form>
            </div>
        </>
        
    )
}

export default ReportIncidentForm;