import React from 'react'
import logo from "./logo.svg"
import moonLogo from "../layout/moon.svg"

const MobileNav = () => {
    return (
        <div id="mobile-nav">
            <img id="mobile-nav-logo" src={logo} alt="logo"/>
            <div>
                <img id="mobile-nav-moon" src={moonLogo} alt="Moon logo"/>
                <div className="vertical-line"></div>
                <div id="mobile-nav-avatar"></div>
            </div>            
        </div>
    )
}

export default MobileNav
