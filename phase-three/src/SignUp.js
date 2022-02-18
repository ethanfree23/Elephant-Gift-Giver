import React, { useState } from "react";

function SignUp({ onAddUser }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            city,
            state
        };

        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then((r) => r.json())
            .then((newUser) => {
                onAddUser(newUser)
            });
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <label>Name:  </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />  <br />
                    <label>Email:  </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />  <br />
                    <label>Password:  </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />  <br />
                    <label>City:  </label>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    /> <br />
                    <label>State:  </label>
                    <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    /> <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default SignUp;