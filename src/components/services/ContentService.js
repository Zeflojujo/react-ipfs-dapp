import React from 'react'
import {Link} from 'react-router-dom';
import {BsChevronRight} from 'react-icons/bs';
const ContentService = () => {
  return (
    <>
        <h4>Quick Links</h4>
        <ul>
            <li><Link to="/customDev"><BsChevronRight size={12}/> Custom Software Development</Link></li>
            <li><Link to="/MobileApp"><BsChevronRight size={12}/> Mobile App Development</Link></li>
            <li><Link to="/Embedded"><BsChevronRight size={12}/> Embedded Systems</Link></li>
            <li><Link to="/SoftwareMaintainance"><BsChevronRight size={12}/> Software Maintainance</Link></li>
            <li><Link to="/SystemInte"><BsChevronRight size={12}/> System Integration</Link></li>
            <li><Link to="/AiBig"><BsChevronRight size={12}/> Ai, Big Data & Machine Learning</Link></li>
            <li><Link to="/Enterprise"><BsChevronRight size={12}/> Enterprise System Develoment</Link></li>
            <li><Link to="/SoftwareReeng"><BsChevronRight size={12}/> Software Reenginering</Link></li>
            <li><Link to="/PenetrationTest"><BsChevronRight size={12}/> Penetration Testing</Link></li>
            <li><Link to="/Vulnerabilities"><BsChevronRight size={12}/> Vulnerabilities Assessment</Link></li>
            <li><Link to="/ComputerForensic"><BsChevronRight size={12}/> Computer Forensics</Link></li>
            <li><Link to="/Internet"><BsChevronRight size={12}/> Internet & Mobile Banking Security</Link></li>
            <li><Link to="/Annual"><BsChevronRight size={12}/> Annual Maintainance Support</Link></li>
            <li><Link to="/Fraud"><BsChevronRight size={12}/> Fraud Investigation</Link></li>
            <li><Link to="/Incidents"><BsChevronRight size={12}/> Incidents Management</Link></li>
            <li><Link to="/MobilePhone"><BsChevronRight size={12}/> Mobile Phone Forensics</Link></li>
            <li><Link to="/ItGovernance"><BsChevronRight size={12}/> IT Governance</Link></li>
            <li><Link to="/SystemAudit"><BsChevronRight size={12}/> System Auditing</Link></li>
        </ul>

    </>
  )
}

export default ContentService