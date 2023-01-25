import React from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar({setUser}){
    function handleLogoutClick(){
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

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
            <button onClick={handleLogoutClick}>
                logout
            </button>
        </nav>
    )
}

export default NavBar