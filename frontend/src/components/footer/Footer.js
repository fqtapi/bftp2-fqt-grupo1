import React from 'react';
import './Footer.css';
import logo from "../../assets/logo/loguito.png";


function Footer() {
    return (
        <div className="footer">
            <div className="thin">
                <img src={logo} className="footer-logo"/>
                <h4> FUNDACION QUIERO TRABAJO</h4>
            </div>
            <div className="wide">
                <p className="footer-p"> Copyright &copy;2022 Fundación Quiero Trabajo | Todos los Derechos Reservados </p>
            </div>
            <div className="thinner">
                <ul>
                    <h3>OFICINA BARCELONA</h3>
                    <li className="li-footer">Ronda Sant Pere 44, Entresuelo 2ª</li>
                    <li className="li-footer">Metro: Urquinaona L1, L4</li>
                    <li className="li-footer">info@quierotrabajo.org</li>
                    <li className="li-footer">93 137 06 63</li>
                </ul>
            </div>

        </div>


    );
}

export default Footer;