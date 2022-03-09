import React from 'react';
import logo from "../assets/logo/logo.png"

function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} className="imageLogo"/>
        </div>
    );
}

export default Navbar;