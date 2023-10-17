import React from 'react'
import {NavLink} from 'react-router-dom';
import {BsChevronRight} from 'react-icons/bs';
const ContentService = () => {
  return (
    <>
        <h4>Quick Links</h4>
        <ul>
            <li><NavLink to="/customDev"><BsChevronRight size={12}/> Custom Software Development</NavLink></li>
            <li><NavLink to="/MobileApp"><BsChevronRight size={12}/> Mobile App Development</NavLink></li>
            <li><NavLink to="/Embedded"><BsChevronRight size={12}/> Embedded Systems</NavLink></li>
            <li><NavLink to="/SoftwareMaintainance"><BsChevronRight size={12}/> Software Maintainance</NavLink></li>
            <li><NavLink to="/SystemInte"><BsChevronRight size={12}/> System Integration</NavLink></li>
            <li><NavLink to="/AiBig"><BsChevronRight size={12}/> Ai, Big Data & Machine Learning</NavLink></li>
            <li><NavLink to="/Enterprise"><BsChevronRight size={12}/> Enterprise System Develoment</NavLink></li>
            <li><NavLink to="/SoftwareReeng"><BsChevronRight size={12}/> Software Reenginering</NavLink></li>
            <li><NavLink to="/PenetrationTest"><BsChevronRight size={12}/> Penetration Testing</NavLink></li>
            <li><NavLink to="/Vulnerabilities"><BsChevronRight size={12}/> Vulnerabilities Assessment</NavLink></li>
            <li><NavLink to="/ComputerForensic"><BsChevronRight size={12}/> Computer Forensics</NavLink></li>
            <li><NavLink to="/Internet"><BsChevronRight size={12}/> Internet & Mobile Banking Security</NavLink></li>
            <li><NavLink to="/Annual"><BsChevronRight size={12}/> Annual Maintainance Support</NavLink></li>
            <li><NavLink to="/Fraud"><BsChevronRight size={12}/> Fraud Investigation</NavLink></li>
            <li><NavLink to="/Incidents"><BsChevronRight size={12}/> Incidents Management</NavLink></li>
            <li><NavLink to="/MobilePhone"><BsChevronRight size={12}/> Mobile Phone Forensics</NavLink></li>
            <li><NavLink to="/ItGovernance"><BsChevronRight size={12}/> IT Governance</NavLink></li>
            <li><NavLink to="/SystemAudit"><BsChevronRight size={12}/> System Auditing</NavLink></li>
        </ul>

    </>
  )
}

export default ContentService