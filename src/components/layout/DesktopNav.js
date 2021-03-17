import React from 'react'
import logo from "./logo.svg"
import moonLogo from "../layout/moon.svg"
import avatar from "../layout/avatar-1.png"
const DesktopNav = () => {
    return (
        <div id="desktop-nav">
            <img style={{ maxWidth: "100px", zIndex: "9999" }} src={logo} alt="logo"/>
            <div style={{ position: "relative", backgroundColor: "#373B53", height: "91vh", width: "100px", marginTop: "-2rem", zIndex: "-1", borderBottomRightRadius: "1.5rem", display: "flex", flexDirection: "column-reverse" }}>
                <div id="test" style={{ borderRadius: "50%", width: "50%", height: "50px", backgroundColor: "#7E88C3", margin: "1rem auto", backgroundSize: "cover" }}></div>
                <hr style={{ borderColor: "#494E6E" }}/>
                <img src={moonLogo} style={{ width: "40%", margin: "0 auto", padding: "1rem .5rem" }}/>
            </div>
        </div>
    )
}

export default DesktopNav