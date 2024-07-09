import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { RiRefreshLine, RiMapPin2Line, RiMailLine, RiPhoneLine } from "react-icons/ri";

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
        const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890";
        let str = "";
        for (let i = 0; i < 12; i++) {
            if(i%2 == 0){
                str += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            else{
                str += " "
            }
        }

        var str1 = ""
        for(var i=0; i<11; i++){
            str1 += str[i]
        }
        setCaptcha(str1);

    };

    useEffect(() => {
        generatecaptcha();
    }, []);

    const validatePhone = () => {
        if (phone.length !== 10) {
            setPhoneError("Phone number must be exactly 10 digits.");
            return false;
        } else {
            setPhoneError("");
            return true;
        }
    };

    const validateCaptcha = () => {
        if (enteredcaptcha.replace(/\s/g, '') !== captcha.replace(/\s/g, '')) {
            setCaptchaError("Captcha does not match");
            return false;
        } else {
            setCaptchaError("");
            return true;
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const isPhoneValid = validatePhone();
        const isCaptchaValid = validateCaptcha();

        if (!isPhoneValid || !isCaptchaValid) {
            return;
        }

        const templateParams = {
            name,
            phone,
            email,
            message,
        };

        emailjs.send('service_meh9cwy', 'template_wvb38sw', templateParams, 'RsXo-SVngYaUiFZBv')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form submitted successfully!");
            }, (err) => {
                console.error('FAILED...', err);
                alert("Failed to send the form. Please try again.");
            });

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
            if (phoneNumber.length === 10) {
                validatePhone();
            }
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
        setEnteredCaptcha("");
    };

    const handleCaptchaChange = (e) => {
        setEnteredCaptcha(e.target.value);
        validateCaptcha();
    };

    const refreshCaptcha = () => {
        generatecaptcha();
        setEnteredCaptcha("");
    };

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
                        <span id="captchabox">{captcha}</span>
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
                <h4><RiMapPin2Line />Address</h4>
                <p>D2, Building Society</p>
                <p>Kodaikanal, 624101</p>
                <p>Tamilnadu, India</p><br></br>
                <h4><RiMailLine />Email</h4>
                <p>sales@digitalsites.in</p><br></br>
                <h4><RiPhoneLine />Phone</h4>
                <p>+91 81222 40975</p>
            </div>
        </section>
    );
}

export default Contact1;