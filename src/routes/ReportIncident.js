
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/49.jpg"
import Footer from "../components/Footer";
import ReportIncidentForm from "../components/ReportIncidentForm";

function ReportIncident () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={heroimage}
                title="Report a Cyber Incident"
                text="We have set of procedure and sections taken to respond to and resolve critical incidents, as we identify, analyze, and correct hazards to prevent a future re- occurence"
                btnClass="hide"
            />
            <ReportIncidentForm/>
            <Footer/>
        </>
    )
}
export default ReportIncident;