import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
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

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu    "}>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    {/* <button>Sign Up</button> */}
                </ul>
                <div className="nav-menu">
                    <Link className="nav-links" to="/">
                        REPORT AN INCIDENT
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;