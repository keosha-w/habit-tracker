import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/users">Users</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/habits">Habits</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/habits/daily">Daily</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/habits/weekly">Weekly</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/habits/monthly">Monthly</Link>
            </li>
        </ul>
    )
}
