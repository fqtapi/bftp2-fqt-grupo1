import React from 'react';
import './Footer.css';
import logo from "../assets/logo/loguito.png";

function Footer(){
    return(
        <div className="footermenu">
            <hr/>
            <div className='branding'>
                <div className="inner-footer">
                    <div className="footer-text">
                        <img src={logo} className="logo"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus labore dignissimos quia qui ad eum, laudantium cum dolores dolorem ipsam placeat voluptate atque culpa nostrum exercitationem dicta quo a!
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
                <p className="copyright">
                    Copyright &copy;2022 Fundcion quiero trabajo | Todos los derechos reservados
                </p>


            </div>
        </div>
    );
}

export default Footer;