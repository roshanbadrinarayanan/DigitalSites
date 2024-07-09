import React from "react";
import { Helmet } from "react-helmet";
import cloud from "./cloud.png"
import ecommerce from "./ecommercestore.png"
import { useEffect } from "react";

function Services(){

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    const goTo = () => {
        window.open("https://store.zoho.in/ResellerCustomerSignUp.do?id=a6b06d2909612b54e59d3cc0d522b3a4", "_blank");
    };

    return(
        <>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <section className="services">
                <div className="cloud">
                    <img src={cloud} />
                    <div className="cloudtext">
                        <h2>Cloud-based Web Development</h2>
                        <p>We build every website from scratch using custom design and development. We specialize in eCommerce websites, which helps our customers to go online easily. We have been designing and launching dynamic websites for over 10 years using all major platforms. We set up Google Analytics for website tracking and performance to measure the conversions.</p>
                        <p>We design and develop eCommerce websites using all major platforms, including Wordpress, CraftCMS, WooCommerce, Shopify and Zoho. Wide range of plugins, tools and integrations ensures your eCommerce stores unique requirements are met.</p>
                        <p>We can help and recommend the right development tool based on the functional requirements. We have built numerous eCommerce stores with varying requirements and we understand what it takes to make our client more successful.</p>
                    </div>
                </div>
                <div className="ecommerce">
                    <div className="ecommercetext">
                        <h2>eCommerce Store</h2>
                        <p>eCommerce is the fastest growing industry and consumers continue to shop more products online. It's important for businesses to build well designed eCommerce store with all the essential features.</p>
                        <p>Our online eCommerce store not only looks amazing, but are built with great user experience from the development stage. Our stores are easy to use, fully functional and secure. Our dedicated team of designers and developers will ensure that website visitors will have a great online shopping experience and understands to build user-friendly websites, fast and SEO-ready. Your website will load extremely fast and compatible on all devices.</p>
                    </div>
                    <img src={ecommerce} />
                </div>
                <h2 id="industryfocus">Industry Focus</h2>
                <div className="industry1">
                    <div className="together">
                        <h3>Tourism & Hospitality</h3>
                        <ul className="list">
                            <li>Fully integrated hospitality and hotel management software</li>
                            <li>Cloud based web booking engine</li>
                            <li>Restaurant Management</li>
                        </ul>
                    </div>
                    <div className="together">
                        <h3>Education</h3>
                        <ul className="list">
                            <li>End-to-end school and higher education ERP solutions</li>
                            <li>From admissions to accounting, with cloud-based applications.</li>
                            <li>Course Planning</li>
                            <li>Event Management</li>
                        </ul>
                    </div>
                    <div className="together">
                        <h3>Retail and Distribution</h3>
                        <ul className="list">
                            <li>Custom retail management software</li>
                            <li>Point of Sale</li>
                            <li>Inventory Management</li>
                            <li>Order Management</li>
                        </ul>
                    </div>
                </div>
                <div className="industry2">
                    <div className="together">
                        <h3>Real Estate and Property Management</h3>
                        <ul className="list">
                            <li>End-to-end real estate Management</li>
                            <li>Property Management</li>
                            <li>Construction Management</li>
                            <li>Quotation Management</li>
                        </ul>
                    </div>
                    <div className="together" id="legalmanagement">
                        <h3>Legal Management</h3>
                        <ul className="list">
                            <li>Digitize your legal case  management software</li>
                            <li>Online Legal Case Management</li>
                            <li>Monitor end-to-end case flow, manage client information, store legal documents</li>
                        </ul>
                    </div>
                    <div className="together" id="manufacturing">
                        <h3>Manufacturing</h3>
                        <ul className="list">
                            <li>Material Procurement</li>
                            <li>Inventory Monitoring</li>
                            <li>Invoice Processing</li>
                            <li>Distribution Management</li>
                        </ul>
                    </div>
                </div>
                <div className="last">
                    <h4>Choose a digital transformation partner who can help you deliver the best customer experience at every stage.</h4>
                    <h5>Your solution is right around the corner</h5>
                    <button id="button9" onClick={goTo}>Sign up for Free</button>
                </div>
            </section>
        </>
    )
}

export default Services;