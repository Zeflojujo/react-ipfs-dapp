import Navbar from "../../../developers-websites/react-ipfs-dapp/src/components/Navbar";
import Hero from "../../../developers-websites/react-ipfs-dapp/src/components/Hero";
import heroimage from "../assets/49.jpg"
import Footer from "../../../developers-websites/react-ipfs-dapp/src/components/Footer";
import ContactUs from "../../../developers-websites/react-ipfs-dapp/src/components/ContactUs";

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
            <ContactUs/>
            <Footer/>
        </>
    )
}
export default Contact;