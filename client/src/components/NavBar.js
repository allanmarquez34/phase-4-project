import React from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar(){

    return(
        <nav>
            <Link to="/home">
            More Than Coffins
            </Link>
            <NavLink to="/estatesales">
                Estate Sales
            </NavLink>
            <NavLink to="/account">
                My Account
            </NavLink>
            <NavLink to="/cart">
                Cart
            </NavLink>
            <NavLink to="/">
                Log out
            </NavLink>
        </nav>
    )
}

export default NavBar