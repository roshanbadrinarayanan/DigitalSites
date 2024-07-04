import React from "react";

function Contact2(){

    const goTo = () => {
        window.open("https://store.zoho.in/ResellerCustomerSignUp.do?id=a6b06d2909612b54e59d3cc0d522b3a4", "_blank");
    };

    return(
        <section className="contact2">
            <div className="sign">
                <h3>Experience your Digital Transformation</h3><br></br>
                <h2>Gain More Customers</h2>
                <h2>Online</h2>
                <button id="button8" onClick={goTo}>Sign up for Free</button>
            </div>
            <div className="getstarted">
                <h3>Get Started Today</h3><br></br>
                <p>Ready to take your digital presence to the next level? Contact us today to learn more about our social media management and digital marketing services. Together, we'll help you reach new heights online.</p>
            </div>
        </section>
    )
}
export default Contact2;