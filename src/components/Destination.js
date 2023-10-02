import tour1 from "../assets/50.jpg";
import tour2 from "../assets/38.jpg";
import tour3 from "../assets/42.jpg";
import tour4 from "../assets/34.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to do a lot within a time frame</p>

           <DestinationData
                className="first-des"
                heading="Tall volcano, Batanga"
                text="One of the most iconic views in Luzon, ML Taal boosta a bolcano inside a lake inside an island. If you fancy a coser loo. the hike up to the crator is a more 45 minutes, and is easy enough for beginners Guides will assist you most of the way.
                and you'll soo the paculiar environment found on an active volcano. including bolcanic rocks and steam vents. 
                The hike can be dusty and hot. so plan for on early morning trip. and then unwind with some bulolo before heading back home"
                img1={tour1}
                img2={tour2}
           />

           <DestinationData
                className="first-des-reverse"
                heading="Mt.Daguldul, Batangas"
                text="If you're looking for a hike that's a little more challenging but still good for a beginner 
                mountaineer, check out Mt. Daguladul in San Juan, Batangas. You;l start your hike from the beach and pass through trapical forest, different rock formations,
                and small streams. Therels a small store halfway up the trail where you can take a beak and drink buka juice, and though the summit itself may not have the best view, the breeze is fantastic, Once you've made it back down, head straight to the beach for a refreshing well-deserved swim."
                img1={tour3}
                img2={tour4}
           />
        </div>
    )
}

export default Destination;