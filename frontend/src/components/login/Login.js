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
                <form className="login-form" onSubmit={handleSubmit}>
                    <span><label className="label-login" htmlFor="userInput">User:  </label>
                    <input className="input-login" type="text"/></span>
                    <span><label className="label-login" htmlFor="passwordInput">Password:  </label>
                    <input className="input-login" type="password"/></span>
                    <input className="css-button-rounded--red" type="submit"/>
                </form>
            </section>
        </div>
    );
}

export default Login;