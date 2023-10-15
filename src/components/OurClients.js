import "./OurClientsStyles.css";
import client1 from "../assets/clients/tcu.png";
import client2 from "../assets/clients/tigo.png";
import client3 from "../assets/clients/nmb.png";
import client4 from "../assets/clients/polisi.png";
import client5 from "../assets/clients/revenue.png";
import client6 from "../assets/clients/costech.png";
import client7 from "../assets/clients/indigo.png";
import client8 from "../assets/clients/esrf.png";
import client9 from "../assets/clients/ethics.png";
import client10 from "../assets/clients/ais.png";

function OurClients () {
    return (
        <>
        <div className="headingClient">
            <div className="client">
                <h1>OUR CLIENTS</h1>
                <p>Tigo backup application has greatly helped our customers movile phones, I can't say enough about how well it is tailored to the needs of TIGO cutomers. It is definitely one of the best mobile apps that we have ever purchased for a long time. Thank you DSG Technology  it has been an honor working with you.</p>
            </div>
            <div className="ceo">
                <h4>TIGO</h4>
                <p>CEO</p>
            </div>
            
        </div>

        {/* slide code */}
        <div className="wrapper">
            <div className="slider">
                <div className="slide-track">

                    {/* Img Code */}
                    <div className="slide">
                        <img src={client1}/>
                    </div>
                    <div className="slide">
                        <img src={client2}/>
                    </div>
                    <div className="slide">
                        <img src={client3}/>
                    </div>
                    <div className="slide">
                        <img src={client4}/>
                    </div>
                    <div className="slide">
                        <img src={client5}/>
                    </div>
                    <div className="slide">
                        <img src={client6}/>
                    </div>
                    <div className="slide">
                        <img src={client7}/>
                    </div>
                    <div className="slide">
                        <img src={client8}/>
                    </div>
                    <div className="slide">
                        <img src={client9}/>
                    </div>
                    <div className="slide">
                        <img src={client10}/>
                    </div>
                    <div className="slide">
                        <img src={client5}/>
                    </div>
                    <div className="slide">
                        <img src={client6}/>
                    </div>

                </div>
            </div>
        </div>

        </>
        
    )
}

export default OurClients;