import './Login.css';
import logo from "../../assets/logo/fqtlogo.png";
import React, {useState, useRef} from "react";
import authService from "../../services/auth.service";



const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const Login = (props) => {
    const form = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        authService.login(username, password)
            .then(props.onSuccessfulLogin)

    };

    return (

        <div className="login">
            <img className="logo-fqt-log" src={logo} alt={"Quiero Trabajo logo"}/>
            <h2 className="login-title">FUNDACIÓN QUIERO TRABAJO</h2>
            <form className="login-form" onSubmit={handleLogin} ref={form}>
                    <span><label className="label-login" htmlFor="userInput">Usuario:  </label>
                    <input className="input-login"
                           type="text"
                           name="username"
                           value={username}
                           onChange={onChangeUsername}
                           validations={[required]}
                    /></span>

                <span><label className="label-login" htmlFor="passwordInput">Contraseña:  </label>
                    <input className="input-login"
                           type="password" name="password"
                           value={password}
                           onChange={onChangePassword}
                           validations={[required]}
                    /></span>

                <input className="css-button-rounded--red" type="submit" value="Acceder"/>
            </form>
        </div>
    )
        ;
}

export default Login;