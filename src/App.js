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

        <Route path="/custom" element={<CustomDev/>} />
        <Route path="/AiBig" element={<AiBig/>} />
        <Route path="/annual" element={<Annual/>} />
        <Route path="/embedded" element={<Embedded/>} />
        <Route path="/computer-forensics" element={<ComputerForensic/>} />
        <Route path="/enterprise" element={<Enterprise/>} />
        <Route path="/fraud" element={<Fraud/>} />
        <Route path="/incidents" element={<Incidents/>} />
        <Route path="/internet" element={<Internet/>} />
        <Route path="/governance" element={<ItGovernance/>} />
        <Route path="/mobile-app" element={<MobileApp/>} />
        <Route path="/mobile-phone" element={<MobilePhone/>} />
        <Route path="/penetration-test" element={<PenetrationTest/>} />
        <Route path="/maintainance" element={<SoftwareMaintainance/>} />
        <Route path="/re-engineering" element={<SoftwareReeng/>} />
        <Route path="/intergration" element={<SystemInte/>} />
        <Route path="/auditing" element={<SystemAudit/>} />
        <Route path="/vulnerability" element={<Vulnerabilities/>} />
      </Routes>
    </div>
  );
}

export default App;
