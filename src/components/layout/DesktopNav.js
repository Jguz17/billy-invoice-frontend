import React from 'react'
import logo from "./logo.svg"
import FeatherIcon from 'feather-icons-react';
import moonLogo from "../layout/moon.svg"
const DesktopNav = () => {
    return (
        <div id="desktop-nav">
            <img style={{ maxWidth: "100px", zIndex: "9999" }} src={logo} alt="logo"/>
            <div style={{ position: "relative", backgroundColor: "#373B53", height: "91vh", width: "100px", marginTop: "-2rem", zIndex: "-1", borderBottomRightRadius: "1.5rem", display: "flex", flexDirection: "column-reverse" }}>
                <div style={{ borderRadius: "50%", width: "40%", height: "40px", backgroundColor: "#7E88C3", margin: "1rem auto" }}></div>
                <hr style={{ borderColor: "#494E6E" }}/>
                <img src={moonLogo} style={{ width: "50%", margin: "0 auto", padding: "1rem .5rem" }}/>
            </div>
        </div>
    )
}

export default DesktopNav