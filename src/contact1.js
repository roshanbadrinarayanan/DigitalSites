import { useState } from "react";
import React from "react";

function Contact1() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        if (phone.length !== 10) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }
        console.log("Form submitted", { name, phone, email, message });
        setError("");
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
        setError("");
    };

    return (
        <section className="contact1">
            <div className="form">
                <h2>Your Digital Transformation Partner</h2>
                <h3>Contact Us</h3>
                <form onSubmit={handlesubmit} className="form-container">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        aria-label="Name"
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        aria-label="Phone"
                        //pattern="\d{10}"
                        maxLength="10"
                        title="Phone number should be 10 digits"
                    />
                    {error && <p className="error">{error}</p>}
                    <label htmlFor="email">E-mail</label>
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
