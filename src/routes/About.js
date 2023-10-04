import Navbar from "../../../developers-websites/react-ipfs-dapp/src/components/Navbar";
import Hero from "../../../developers-websites/react-ipfs-dapp/src/components/Hero";
import heroimage from "../assets/8.jpg"
import Footer from "../../../developers-websites/react-ipfs-dapp/src/components/Footer";
import AboutUs from "../../../developers-websites/react-ipfs-dapp/src/components/AboutUs";

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