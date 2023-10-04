import Navbar from "../../../developers-websites/react-ipfs-dapp/src/components/Navbar";
import Hero from "../../../developers-websites/react-ipfs-dapp/src/components/Hero";
import heroimage from "../assets/40.jpg"
import Footer from "../../../developers-websites/react-ipfs-dapp/src/components/Footer";
import Products from "../../../developers-websites/react-ipfs-dapp/src/components/Products";

function Contact () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={heroimage}
                title="Our Products"
                text="We are teach company offering a variety of solutions in software development and cyber security."
                btnClass="hide"
            />
            <Products/>
            <Footer/>
        </>
    )
}
export default Contact;