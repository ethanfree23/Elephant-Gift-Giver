
import React, { useState, useEffect } from "react";
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

        users.map((user) => {
            if (user.name === userName && user.password === password) {
                history('/home')
            } else {
                setStatus('rejected')
            }
        })
    }

    function manageRejection() {
        return (
            <h2>User Not Found...</h2>
        )
    }

    return (
        <div>
            <form
                onSubmit={manageLogin}>
                <label>
                    <input onChange={manageUserName}></input>
                    <input onChange={managePassword}></input>
                    <button type="submit">Log In</button>
                </label>
            </form>
            {status === "reject" && manageRejection()}
        </div>
    )
}

export default LoginForm;