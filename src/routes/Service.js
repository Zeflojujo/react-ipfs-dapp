import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/18.jpg"
import Footer from "../components/Footer";
import Services from "../components/Services";

function Service () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={heroimage}
                title="What We Do"
                text="We are tech company offering a variety of solutions in software development and cyber security."
                btnClass="hide"
            />
            <Services/>
            <Footer/>
        </>
    )
}
export default Service;