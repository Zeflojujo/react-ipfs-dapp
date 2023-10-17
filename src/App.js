import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Product from "./routes/Product";
import ReportIncident from "./routes/ReportIncident";
import ScrollToTop from "./components/ScrollToTop";
import CustomDev from "./components/services/CustomDev";
import AiBig from "./components/services/AiBig";
import Annual from "./components/services/Annual";
import Embedded from "./components/services/Embedded";
import ComputerForensic from "./components/services/ComputerForensic";
import Enterprise from "./components/services/Enterprise";
import Fraud from "./components/services/Fraud";
import Incidents from "./components/services/Incidents";
import Internet from "./components/services/Internet";
import ItGovernance from "./components/services/ItGovernance";
import MobileApp from "./components/services/MobileApp";
import MobilePhone from "./components/services/MobilePhone";
import PenetrationTest from "./components/services/PenetrationTest";
import SoftwareMaintainance from "./components/services/SoftwareMaintainance";
import SoftwareReeng from "./components/services/SoftwareReeng";
import SystemInte from "./components/services/SystemInte";
import SystemAudit from "./components/services/SystemAudit";
import Vulnerabilities from "./components/services/Vulnerabilities";

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/incident" element={<ReportIncident/>}/>
        <Route path="/projects" element={<Product/>}/>

        <Route path="/customDev" element={<CustomDev/>} />
        <Route path="/AiBig" element={<AiBig/>} />
        <Route path="/Annual" element={<Annual/>} />
        <Route path="/Embedded" element={<Embedded/>} />
        <Route path="/ComputerForensic" element={<ComputerForensic/>} />
        <Route path="/Enterprise" element={<Enterprise/>} />
        <Route path="/Fraud" element={<Fraud/>} />
        <Route path="/Incidents" element={<Incidents/>} />
        <Route path="/Internet" element={<Internet/>} />
        <Route path="/ItGovernance" element={<ItGovernance/>} />
        <Route path="/MobileApp" element={<MobileApp/>} />
        <Route path="/MobilePhone" element={<MobilePhone/>} />
        <Route path="/PenetrationTest" element={<PenetrationTest/>} />
        <Route path="/SoftwareMaintainance" element={<SoftwareMaintainance/>} />
        <Route path="/SoftwareReeng" element={<SoftwareReeng/>} />
        <Route path="/SystemInte" element={<SystemInte/>} />
        <Route path="/SystemAudit" element={<SystemAudit/>} />
        <Route path="/Vulnerabilities" element={<Vulnerabilities/>} />
      </Routes>
    </div>
  );
}

export default App;
