import React from 'react';
import './Footer.css';
import logo from "../../assets/logo/loguito.png";

function Footer() {
    return (
        <div className="footer-menu">
            <div className='branding'>
                <div className="inner-footer">
                    <div className="footer-text">
                        <img src={logo} className="logo"/> FUNDACION QUIERO TRABAJO
                    </div>
                    <div className="contact">
                        <ul className="icons">
                            <h3>OFICINA BARCELONA</h3>
                            <li>Ronda Sant Pere 44, entresuelo 2ª</li>
                            <li>Metro: Urquinaona L1, L4</li>
                            <li>info@quierotrabajo.org</li>
                            <li>93 137 06 63</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">
                Copyright &copy;2022 Fundación Quiero Trabajo | Todos los Derechos Reservados
            </p>
        </div>
    );
}

export default Footer;