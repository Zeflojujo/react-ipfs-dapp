import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroimage from "../assets/5.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={heroimage}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}
export default Home;