import React from 'react'
import logo from "./logo.svg"
import moonLogo from "../layout/moon.svg"

const Nav = () => {
    return (
        <div id="desktop-nav">
            <img id="desktop-nav-img" src={logo} alt="logo"/>
            <div id="desktop-nav-body">
                <div id="desktop-nav-avatar"></div>
                <hr className="nav-hr" />
                <img id="desktop-nav-moon" src={moonLogo} alt="Moon logo" />
            </div>
        </div>
    )
}

export default Nav