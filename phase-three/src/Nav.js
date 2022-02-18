import React from "react";
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div>
                <Link to="/home">
                    <h1>Elephant Gift Giver</h1>
                </Link>
            </div>
            <div>
                <Link to="/dashboard">
                    <h1>Dashboard</h1>
                </Link>
            </div>
        </div>
    )
}

export default Nav;