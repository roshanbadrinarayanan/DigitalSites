import React from "react";
import offer from "./offerings.png"
import socialmedia from "./socialmedia.png"
import { useEffect } from "react";
import { Helmet } from "react-helmet";


function DigitalMarketing(){

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    return(
        <>
            <Helmet>
                <title>Digital Marketing</title>
            </Helmet>
            <section className="digitalmarketing">
                <div className="dmintro">
                    <h2>Digital Marketing Services</h2>
                    <p>At Digital Sites, we are driven by a passion for empowering businesses to excel in the digital landscape. Our team of seasoned professionals combines expertise with creativity to elevate your online presence to new heights.<br></br><br></br>As a full-service digital marketing agency, we specialize in social media management, content creation, and online brand building. We bring a wealth of experience and innovative strategies to the table, helping our clients achieve their social media objectives and expand their businesses online.<br></br><br></br>Join us at Digital Sites, and let’s unlock the full potential of your brand in the digital world.</p>
                </div>
                <div className="blankspace"></div>
                <div className="offerings">
                    <div className="offerimg">
                        <img src={offer} />
                    </div>
                    <div className="offertext">
                        <h3>Our Offerings</h3>
                        <h5>Social Media Audit</h5>
                        <p>Review of current social media profiles<br></br>Recommendations for improvement</p>
                        <h5>Content Creation</h5>
                        <p>Creation of engaging content (images, videos, captions)<br></br>Content calendar planning</p>
                        <h5>Community Management</h5>
                        <p>Monitoring and engagement with your audience<br></br>Building a loyal following</p>
                        <h5>Influencer Partnerships</h5>
                        <p>Identification and collaboration with relevant influencers<br></br>Promotion of your brand through influencer channels</p>
                        <h5>Paid Advertising</h5>
                        <p>Management of paid advertising campaigns<br></br>Targeted advertising to reach a larger audience</p>
                        <h5>Digital Advertising</h5>
                        <p>We leverage the power of digital advertising to reach your target audience<br></br>and drive traffic, leads, and conversions.</p>
                        <h5>SEO Optimization</h5>
                        <p>Our SEO experts optimize your website to improve <br></br>its visibility on search engines and drive organic traffic.</p>
                    </div>
                </div>
                <div className="blankspace"></div>
                <div className="socialmedia">
                    <div className="socialmediatext">
                        <h3>Social Media Marketing</h3>
                        <p>At Digital Sites, we believe in a personalized approach to social media management. We will start by conducting a thorough audit of your current social media presence and competitive analysis to understand your target audience and industry landscape better.</p>
                        <p>Based on our findings, we will develop a customized social media strategy tailored to your business goals. This strategy will include content planning, community engagement, influencer collaborations, and paid advertising campaigns, all aimed at increasing your brand's visibility and engagement on social media platforms.</p>
                    </div>
                    <div className="socialmediaimg">
                        <img src={socialmedia} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DigitalMarketing;