import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"

class Navbar extends Component {

    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img alt="logo" src={logo}></img></h1>

                <div className="menu-icons" onClick={ this.handleClick }>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu activee" : "nav-menu    "}>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink className={item.cName} to={item.url}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                    {/* <button>Sign Up</button> */}
                </ul>
                <div className="nav-menu">
                    <NavLink className="nav-links" to="/">
                        REPORT AN INCIDENT
                    </NavLink>
                </div>
            </nav>
        )
    }
}

export default Navbar;