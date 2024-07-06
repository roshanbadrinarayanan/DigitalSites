import React from "react";
import img1 from "./webdesignanddevelopment.png"
import img2 from "./increaseyoursales.png"

function Second(){

    const goTo = () => {
        window.open("https://store.zoho.in/ResellerCustomerSignUp.do?id=a6b06d2909612b54e59d3cc0d522b3a4", "_blank");
    };

    const openimg1 = () => {
        window.open(img1)
    }
    const openimg2 = () => {
        window.open(img2)
    }

    return(
        <section className="secondpart">
            <div className="onehalf">
                <h2>Cloud-Based Web Development</h2>
                <p>We partner with the best cloud based web development partners. From Adobe to CraftCMS, WooCommerce, Shopify to Zoho to meet our customers business objectives.</p>
                <img src={img1} alt="img1" onClick={openimg1}/>
            </div>
            <div className="secondhalf">
                <h2>eCommerce</h2>
                <p>eCommerce is the fastest growing industry and consumers continue to shop more products online. Digital transformation is a must for businesses to survive in today's market. It's important for businesses to a build well designed eCommerce store with all of the essential features. Online store with a great look ,easy to use and secured.</p>
                <img src={img2} alt="img2" onClick={openimg2}/>
            </div>
            <div id="button3-container">
                <button id="button3" onClick={goTo}>Sign up for free</button>
            </div>
        </section>
    )
}

export default Second;