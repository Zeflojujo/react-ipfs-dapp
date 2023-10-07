
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/49.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={heroimage}
                title="Let's Connect"
                text="We Would be happy to hear from you."
                btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}
export default Contact;