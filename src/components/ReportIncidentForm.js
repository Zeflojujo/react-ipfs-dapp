import "./ContactFormStyles.css";
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
                <form>
                    <input placeholder="Choose an incident type"/>
                    <textarea placeholder="Describe the Details" rows={4}></textarea>
                    <input placeholder="Email Address"/>
                    <input placeholder="Mobile Phone"/>
                    <input placeholder="Organization Name (optional)"/>
                    <button>Submit Incident</button>
                </form>
            </div>
        </>
        
    )
}

export default ReportIncidentForm;