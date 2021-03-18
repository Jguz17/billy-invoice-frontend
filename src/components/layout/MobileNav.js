import React from 'react'
import logo from "./logo.svg"
import moonLogo from "../layout/moon.svg"

const MobileNav = () => {
    return (
        <div id="mobile-nav" style={{ backgroundColor: "#373B53", width: "100%", height: "75px" }}>
            <img style={{ maxWidth: "75px", height: "75px"}} src={logo} alt="logo"/>
            <div >
                <img style={{width: "30px"}} src={moonLogo} style={{ marginRight: "1rem" }}/>
                <div style={{ width: "1px", border: "1px solid #7E88C3", height: "75px", margin: "0 1rem" }}></div>
                <div id="test" style={{ borderRadius: "50%", width: "40px", height: "40px",  backgroundSize: "cover", marginRight: "1rem" }}></div>
            </div>            
        </div>
    )
}

export default MobileNav
