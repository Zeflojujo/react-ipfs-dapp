import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/18.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={heroimage}
                title="Our Service"
                btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    )
}
export default Service;