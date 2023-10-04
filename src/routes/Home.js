import Navbar from "../../../developers-websites/react-ipfs-dapp/src/components/Navbar";
import Hero from "../../../developers-websites/react-ipfs-dapp/src/components/Hero";
import heroimage from "../assets/5.jpg"
import Destination from "../../../developers-websites/react-ipfs-dapp/src/components/Destination";
import Services from "../../../developers-websites/react-ipfs-dapp/src/components/Services";
import Footer from "../../../developers-websites/react-ipfs-dapp/src/components/Footer";
import "../../../developers-websites/react-ipfs-dapp/src/components/AboutUsStyles.css";
import MainArea from "../../../developers-websites/react-ipfs-dapp/src/components/MainArea";
import Focus from "../../../developers-websites/react-ipfs-dapp/src/components/Focus";

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