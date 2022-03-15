import './Login.css';
import logo from "../../assets/logo/fqtlogo.png";
import React from "react";

function Login(props) {

    const handleSubmit = () => {
        props.onSuccessfulLogin();
    }

    return (

        <div className="login">
            <section className="login-section">
                <img className="logo-fqt-log" src={logo} alt={"Quiero Trabajo logo"}/>
                <h2 className="login-title">FUNDACIÓN QUIERO TRABAJO</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <span><label className="label-login" htmlFor="userInput">Usuario:  </label>
                    <input className="input-login" type="text"/></span>
                    <span><label className="label-login" htmlFor="passwordInput">Contraseña:  </label>
                    <input className="input-login" type="password"/></span>
                    <input className="css-button-rounded--red" type="submit" value="ACCEDER"/>
                </form>
            </section>
        </div>
    );
}

export default Login;