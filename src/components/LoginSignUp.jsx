import { useState } from "react";

function LoginSignUp(params) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const login = async (event) => {
        event.preventDefault();//stops refreshing page after clicking submit
        console.log("making API call");
        // const credentials = { username: username, password: password };
        const credentials =
        {
            "email": "john@mail.com",
            "password": "changeme"
        }
        const response = await fetch(
            // import.meta.env.VITE_BACKEND_API_BASE_URL 
            "https://api.escuelajs.co/api/v1/auth/login"
            // + "auth/login"
            ,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
        const resJson = await response.json();
        console.log("login::resJson=", resJson);
    };
    return (
        <form className="login-form" onSubmit={login}>
            <h2>Login/SignUp</h2>
            <input placeholder="email" type="email" onChange={(e) => { setUserName(e.target.value) }} />
            <input placeholder="password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default LoginSignUp;