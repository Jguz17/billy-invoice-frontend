import React from 'react'

const MobileNav = () => {
    return (
        <div>
            <img style={{ maxWidth: "75px", zIndex: "9999" }} src={logo} alt="logo"/>
            <div style={{ position: "relative", backgroundColor: "#373B53", height: "94.5vh", width: "75px", marginTop: "-2rem", zIndex: "-1", borderBottomRightRadius: "1.5rem", display: "flex", flexDirection: "column-reverse" }}>
                <div id="test" style={{ borderRadius: "50%", width: "60%", height: "50px", backgroundColor: "#7E88C3", margin: "1rem auto", backgroundSize: "cover" }}></div>
                <hr style={{ borderColor: "#494E6E" }}/>
                <img src={moonLogo} alt="Moon logo" style={{ width: "50%", margin: "0 auto", padding: "1rem .5rem" }}/>
            </div>
        </div>
    )
}

export default MobileNav
