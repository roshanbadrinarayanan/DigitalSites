import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./digitalmarketing.png"

function Part3(){

    const navigate = useNavigate();
    const submit = () => {
        navigate("/digital-marketing") 
    }

    return(
        <section className="part3">
            <div className="text">
                <h2>Time for a Digital Transformation</h2><br></br>
                <p>Businesses are facing more competition than ever before and its time for companies to adapt for digital transformation. ​It's hard to predict your next digital platform.</p><br></br>
                <p>Digital transformation would be your main strategy to win your customers. It’s time to launch your brand into the digital world! At Digital Sites we help you to launch your brand in digital world. We have the right skills to take your marketing digita</p><br></br>
                <p>Our digital marketing team will help you to generate more traffic with ongoing search engine optimization, pay-per-click or Social Media Marketing, Email marketing.</p><br></br>
                <button onClick={submit} id="button4">Learn More</button>
            </div>
            <div className="img">
                <img src={img} alt="digitalmarketing" />
            </div>
        </section>
    )
}

export default Part3;