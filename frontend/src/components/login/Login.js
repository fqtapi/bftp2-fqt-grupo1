import './Login.css';

function Login(props) {

    const handleSubmit = () => {
        props.onSuccessfulLogin();
    }

    return (
        <div className="footer">

            <form onSubmit={handleSubmit}>
                <label htmlFor="userInput">User</label>
                <input type="text"/>
                <label htmlFor="passwordInput">Password</label>
                <input type="password"/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login;