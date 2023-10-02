import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/8.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={heroimage}
                title="Who We Are"
                text="Innovation with Heart"
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}
export default About;