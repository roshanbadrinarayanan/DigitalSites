import React from "react";
import authorized from "./Zohoauthorized-partner.png";
import creator from "./ZohoCreatorRegistered.png";

function About() {
    return (
        <section className="about">
            <div className="img-container">
                <img src={authorized} alt="Zohoauthorized-partner" className="partner-logo1" />
                <img src={creator} alt="ZohoCreatorRegistered" className="partner-logo2" />
            </div>
            <div className="text-container">
                <h2>About Us</h2>
                <p>We are a team of experienced cloud-based web developers specialized in creating cloud apps based on <i>Software-as-a-Service</i> (SaaS) model. We have experience working across a range of sectors such as Agriculture, Retail, Hospitality, Manufacturing, Legal, Real Estate, and NGO.</p><br></br>
                <ul className="bulletpoints">
                    <li>Hands-on experience in Digital Transformation & Consulting</li>
                    <li>Experience in building cloud application development platform</li>
                    <li>Experienced in design and development of applications across domains</li>
                </ul>
            </div>
            <div className="products-container">
                <div className="product-info">
                    <h4>10</h4>
                    <h4>Products</h4>
                    <h6>or</h6>
                    <h4>1000</h4>
                    <h4>Products</h4>
                </div>
                <div className="product-info">
                    <h6>Sell Online</h6>
                    <h4>Sell 24/7</h4>
                    <h6>Get Customers Online</h6>
                </div>
            </div>
        </section>
    );
}

export default About;
