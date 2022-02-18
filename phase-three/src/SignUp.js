import React, { useState } from "react";

function SignUp({ onAddUser }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name,
            email,
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
                    <input />  <br />
                    <label>Email:  </label>
                    <input />  <br />
                    <label>Password:  </label>
                    <input />  <br />
                    <label>City:  </label>
                    <input /> <br />
                    <label>State:  </label>
                    <input /> <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default SignUp;