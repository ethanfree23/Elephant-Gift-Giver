import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ users }) {
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
    const [status, setStatus] = useState("pending");
    const history = useNavigate();

    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);

    function manageUserName(e) {
        const value = e.target.value;
        setUserName(value);
    }

    function managePassword(e) {
        const value = e.target.value;
        setPassword(value);
    }

    function manageLogin(e) {
        e.preventDefault();

        const foundUser = users.find(user => user.name === userName && user.password === password);

        if (foundUser) {
            history('/home');
        } else {
            setStatus('rejected');
        }
    }

    function manageRejection() {
        return (
            <h2>User Not Found...</h2>
        )
    }

    return (
        <div>
            <form onSubmit={manageLogin}>
                <label>
                    <input 
                    placeholder="Name"
                    onChange={manageUserName}></input>
                    <input 
                    placeholder="Password"
                    type="password"
                    onChange={managePassword}></input>
                    <button type="submit">Log In</button>
                </label>
            </form>
            {status === "rejected" && manageRejection()}
        </div>
    )
}

export default LoginForm;
