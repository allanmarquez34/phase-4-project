import React from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar(){

    return(
        <nav>
            <Link>
            More Than Coffins
            </Link>
            <NavLink>
                Estate Sales
            </NavLink>
            <NavLink>
                My Account
            </NavLink>
            <NavLink>
                Cart
            </NavLink>
        </nav>
    )
}

export default NavBar