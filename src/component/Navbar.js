import React from "react";
import chelseaLogo from "../Chelsea-Logo.png"
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <img src={chelseaLogo} alt="logo" className="logo"/> 
                <Link to="/">Fact one</Link>
                <Link to="/fact-two">Fact two</Link>           
                <Link to="/fact-three">Fact three</Link>
            
            </div>
        </nav>
       
    )
}

export default withRouter(Navbar)
