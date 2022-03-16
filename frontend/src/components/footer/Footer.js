import React from 'react';
import './Footer.css';
import logo from "../../assets/logo/loguito.png";


function Footer() {
    return (
        <div className="footer">
            <div className="thin">
                <img src={logo} className="logo"/>
                <h4> FUNDACION QUIERO TRABAJO</h4>
            </div>
            <div className="wide">
                <p> Copyright &copy;2022 Fundación Quiero Trabajo | Todos los Derechos Reservados </p>
            </div>
            <div className="thin">
                <ul>
                    <h3>OFICINA BARCELONA</h3>
                    <li>Ronda Sant Pere 44, Entresuelo 2ª</li>
                    <li>Metro: Urquinaona L1, L4</li>
                    <li>info@quierotrabajo.org</li>
                    <li>93 137 06 63</li>
                </ul>
            </div>

        </div>


    );
}

export default Footer;