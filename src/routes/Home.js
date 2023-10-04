import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/5.jpg"
import Destination from "../components/Destination";
import Services from "../components/Services";
import Footer from "../components/Footer";
import "../components/AboutUsStyles.css";
import MainArea from "../components/MainArea";
import Focus from "../components/Focus";

function Home () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={heroimage}
                title="Building and Innovating together"
                text="Leveraging advanced technologies to deliver scalable solutions that exceed expectations"
                buttonText="Get Started"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <MainArea/>
            <Services/>
            <Focus/>
            <Footer/>
        </>
    )
}
export default Home;