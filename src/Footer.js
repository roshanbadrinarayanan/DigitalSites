import React from "react";
import authorized from "./Zohoauthorized-partner.png";
import creator from "./ZohoCreatorRegistered.png";
import logo from "./LOGO.jpg"

function Footer(){
    return(
        <div className="footer">
            <div className="footer1">
                <img src={logo} alt="logo" width={100} height={100}/>
            </div>
            <div className="footer2">
                <img src={authorized} alt="authorized" width={300}/>
            </div>
            <div className="footer3">
                <img src={creator} alt="creator" width={300}/>
            </div>
        </div>
    )
}

export default Footer;