import React from 'react';
import logo from "../assets/logo/logo.png";

function Footer(){
    return(
        <div className="footermenu">
            <div className='branding'>
                <img src={logo} className="logo"/>
                <p> © 2022 Fundacion quiero trabajo, todos los derechos reservados </p>
            </div>
        </div>
    );
}

export default Footer;