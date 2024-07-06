import React, { useState } from "react";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import { RiRefreshLine } from "react-icons/ri";

function Contact1() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phoneerror, setPhoneError] = useState("");
    const [captchaerror, setCaptchaError] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [enteredcaptcha, setEnteredCaptcha] = useState("");

    const generatecaptcha = () => {
        var characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890"
        var str = ""
        for(var i=0; i<6; i++){
            str += characters.charAt(Math.floor(Math.random()*62))
        }
        setCaptcha(str);
    }

    useEffect(() => {
        generatecaptcha();
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (phone.length !== 10) {
            setPhoneError("Phone number must be exactly 10 digits.");
            return;
        }
        if(enteredcaptcha != captcha){
            setCaptchaError("Captcha does not match")
            return;
        }

        const templateParams = {
            name,
            phone,
            email,
            message
        };

        emailjs.send('service_meh9cwy', 'template_wvb38sw', templateParams, 'RsXo-SVngYaUiFZBv')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form submitted successfully!");
            }, (err) => {
                console.error('FAILED...', err);
                alert("Failed to send the form. Please try again.");
            });

        setPhoneError("");
        setCaptchaError("");
        handleReset();
        generatecaptcha();
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        const phoneNumber = e.target.value;
        if (/^\d*$/.test(phoneNumber) && phoneNumber.length <= 10) {
            setPhone(phoneNumber);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleReset = () => {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setPhoneError("");
        setCaptchaError("");
        setCaptcha("");
    };

    const handleCaptchaChange = (e) => {
        setEnteredCaptcha(e.target.value);
    }

    const refreshCaptcha = () => {
        generatecaptcha();
        setEnteredCaptcha("");
    }

    return (
        <section className="contact1">
            <div className="form">
                <h2>Your Digital Transformation Partner</h2>
                <h3>Contact Us</h3>
                <form onSubmit={handlesubmit} className="form-container">
                    <label htmlFor="name">Name<span className="star">*</span></label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        aria-label="Name"
                    />
                    <label htmlFor="phone">Phone<span className="star">*</span></label>
                    <input
                        type="number"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        aria-label="Phone"
                        maxLength="10"
                        title="Phone number should be 10 digits"
                    />
                    {phoneerror && <p className="error">{phoneerror}</p>}
                    <label htmlFor="email">E-mail<span className="star">*</span></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        aria-label="E-mail"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Enter a message for us"
                        aria-label="Message"
                    />
                    <div className="captchacontainer">
                        <label htmlFor="captcha">Enter Captcha<span className="star">*</span></label>
                        <input
                            type="text"
                            value={enteredcaptcha}
                            id="captcha"
                            onChange={handleCaptchaChange}
                            required
                        />
                        <span>{captcha}</span>
                        <button type="button" className="refresh-icon" onClick={refreshCaptcha}>
                                <RiRefreshLine />
                        </button><br></br>
                        {captchaerror && <p className="captchaerror">{captchaerror}</p>}
                    </div>
                    <div className="button-container">
                        <button type="submit" id="button6">Submit</button>
                        <button type="button" id="button7" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
            <div className="notform">
                <h2>Reach Us</h2>
                <h4>Begin your Digital Transformation with us</h4><br></br>
                <h4>Address</h4>
                <p>D2, Building Society</p>
                <p>Kodaikanal, 624101</p>
                <p>Tamilnadu, India</p><br></br>
                <h4>Email</h4>
                <p>sales@digitalsites.in</p><br></br>
                <h4>Phone</h4>
                <p>+91 81222 40975</p>
            </div>
        </section>
    );
}

export default Contact1;