import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginSignUp({onLoginSuccess}) {
    const navigate = useNavigate();
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
        try {
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
            if (response.ok) {
                onLoginSuccess(username);
                localStorage.setItem("access_token", resJson.access_token);
                localStorage.setItem("refresh_token", resJson.refresh_token);
                console.log("_token", localStorage.getItem("access_token") + ",-=>" + localStorage.getItem("refresh_token"));
                navigate("/");
            }
            else {
                console.log("Unauthorized, Please check your credentials");
            }
        } catch (error) {
            console.error("LoginSignUp:", error);
        }
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