import React from 'react'
import {NavLink} from 'react-router-dom';
import {BsChevronRight} from 'react-icons/bs';
const ContentService = () => {
  return (
    <>
        <h4>Quick Links</h4>
        <ul>
            <li><NavLink to="/custom"><BsChevronRight size={12}/> Custom Software Development</NavLink></li>
            <li><NavLink to="/mobile-app"><BsChevronRight size={12}/> Mobile App Development</NavLink></li>
            <li><NavLink to="/embedded"><BsChevronRight size={12}/> Embedded Systems</NavLink></li>
            <li><NavLink to="/maintainance"><BsChevronRight size={12}/> Software Maintainance</NavLink></li>
            <li><NavLink to="/intergration"><BsChevronRight size={12}/> System Integration</NavLink></li>
            <li><NavLink to="/AiBig"><BsChevronRight size={12}/> Ai, Big Data & Machine Learning</NavLink></li>
            <li><NavLink to="/enterprise"><BsChevronRight size={12}/> Enterprise System Develoment</NavLink></li>
            <li><NavLink to="/re-engineering"><BsChevronRight size={12}/> Software Reenginering</NavLink></li>
            <li><NavLink to="/penetration-test"><BsChevronRight size={12}/> Penetration Testing</NavLink></li>
            <li><NavLink to="/vulnerability"><BsChevronRight size={12}/> Vulnerabilities Assessment</NavLink></li>
            <li><NavLink to="/computer-forensics"><BsChevronRight size={12}/> Computer Forensics</NavLink></li>
            <li><NavLink to="/internet"><BsChevronRight size={12}/> Internet & Mobile Banking Security</NavLink></li>
            <li><NavLink to="/annual"><BsChevronRight size={12}/> Annual Maintainance Support</NavLink></li>
            <li><NavLink to="/fraud"><BsChevronRight size={12}/> Fraud Investigation</NavLink></li>
            <li><NavLink to="/incidents"><BsChevronRight size={12}/> Incidents Management</NavLink></li>
            <li><NavLink to="/mobile-phone"><BsChevronRight size={12}/> Mobile Phone Forensics</NavLink></li>
            <li><NavLink to="/governance"><BsChevronRight size={12}/> IT Governance</NavLink></li>
            <li><NavLink to="/auditing"><BsChevronRight size={12}/> System Auditing</NavLink></li>
        </ul>

    </>
  )
}

export default ContentService