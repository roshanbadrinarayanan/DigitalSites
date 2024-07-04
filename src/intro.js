import React from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();

    const submit = () => {
        navigate("/services");
    };

    const goTo = () => {
        window.open("https://store.zoho.in/ResellerCustomerSignUp.do?id=a6b06d2909612b54e59d3cc0d522b3a4", "_blank");
    };

    return (
        <section className="intro">
            <div className="intro1">
                <h4>Not just a Website. Build Your Online Presence</h4>
                <h2><b>Begin your digital transformation journey. Be on the Web. Get Noticed</b></h2>
                <button onClick={submit} id="button1"><b>Ready to go Digital?</b></button>
            </div>
            <div className="intro2" id="rectangle-container">
                <div className="rectangle-content">
                    <h4>Get your eCommerce Store. Sign up for Free</h4>
                    <button onClick={goTo} id="button2">Sign up for Free</button>
                    <p>Sell products online 24/7</p>
                </div>
            </div>
        </section>
    );
}

export default Intro;
