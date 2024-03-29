import React from 'react'
import Data from '../../data/navbar.data.json'
import { Link, useLocation } from 'react-router-dom';
import './navbar.style.scss'
import DropdownSVG from "../../static/dropdown.svg"

const Navbar = () => {
    const location = useLocation()

    const isCurrentRoute = (route) => {
        if (route === "/projects/1/" && location.pathname.split("/")[1] === "projects") {
            return true
        }
        return route === location.pathname
    }

    const getNavbarLinkClass = (route) => isCurrentRoute(route) ? "active-navbar-link" : "inactive-navbar-link"

    const getDropdownLinkClass = (route) => isCurrentRoute(route) ? "active-dropdown-link" : "inactive-dropdown-link"

    let key = 0

    return (
        <div className="navbar animate__animated animate__fadeInDown">

            <h1> {Data["title"].toUpperCase()} </h1>

            <ul>
                {
                    Data["routes"].map(({value, route}) =>
                        <div key={key++}>
                            <Link className={getNavbarLinkClass(route)} to={route}> {value} </Link>
                        </div>
                    )
                }
            </ul>

            <div className="dropdown-container">
                <button> <img src={DropdownSVG} alt="" /> </button>
                <div>
                    {
                        Data["routes"].map(({value, route}) =>
                            <Link className={getDropdownLinkClass(route)} to={route} key={key++}> { value } </Link>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar
