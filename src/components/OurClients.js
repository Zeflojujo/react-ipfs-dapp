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
import client11 from "../assets/clients/aln.png";
import client12 from "../assets/clients/azampay.png";
import client13 from "../assets/clients/nmb.png";
import client14 from "../assets/clients/dayone.png";
import client15 from "../assets/clients/drc.png";
import client16 from "../assets/clients/dse.png";
import client17 from "../assets/clients/ifm.png";
import client18 from "../assets/clients/jti.png";
import client19 from "../assets/clients/maendeleo.png";
import client20 from "../assets/clients/maxmalipo.png";
import client21 from "../assets/clients/pspf.png";
import client22 from "../assets/clients/royal.png";
import client23 from "../assets/clients/selcom.png";
import client24 from "../assets/clients/utt.png";
import client25 from "../assets/clients/veta.png";

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
                        <img alt="img1" src={client1}/>
                    </div>
                    <div className="slide">
                        <img alt="img2" src={client2}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client3}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client4}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client5}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client6}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client7}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client8}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client9}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client10}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client22}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client21}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client20}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client19}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client18}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client17}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client16}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client15}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client14}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client11}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client12}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client13}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client23}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client24}/>
                    </div>
                    <div className="slide">
                        <img alt="img1" src={client25}/>
                    </div>

                </div>
            </div>
        </div>

        </>
        
    )
}

export default OurClients;