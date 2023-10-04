import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/40.jpg"
import Footer from "../components/Footer";
import Products from "../components/Products";

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