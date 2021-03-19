import React from 'react'
import logo from "./logo.svg"
import moonLogo from "../layout/moon.svg"

const MobileNav = () => {
    return (
        <div id="mobile-nav">
            <img id="mobile-nav-logo" src={logo} alt="logo"/>
            <div >
                <img style={{width: "30px"}} src={moonLogo} style={{ marginRight: "1rem" }}/>
                <div style={{ width: "1px", border: "1px solid #7E88C3", height: "75px", margin: "0 1rem" }}></div>
                <div id="mobile-nav-avatar"></div>
            </div>            
        </div>
    )
}

export default MobileNav
