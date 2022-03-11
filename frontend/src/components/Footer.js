import React from 'react';
import logo from "../assets/logo/logo.png";
import './Footer.css';
function Footer(){
    return(
        <div className="footermenu">
            <div className='branding'>
                <img src={logo} className="img-logo"/>
                <p>Fundación Quiero Trabajo © 2022 | Todos los Derechos Reservados </p>
            </div>
        </div>
    );
}

export default Footer;