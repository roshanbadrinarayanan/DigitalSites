import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from "emailjs-com";
import { useState } from 'react';


function Footer() {

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        const templateparams = {
            email
        }

        emailjs.send('service_meh9cwy', 'template_y5jqhns', templateparams, 'RsXo-SVngYaUiFZBv')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form submitted successfully!");
            }, (err) => {
                console.error('FAILED...', err);
                alert("Failed to send the form. Please try again.");
            });

        setEmail("");

    }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>D2, Building Society<br></br>Kodaikanal, TamilNadu<br></br>624101<br></br><br></br>+91 81222 40975<br></br>sales@digitalsites.in</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/digital-marketing">Digital Marketing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe</h4>
          <form onSubmit={handlesubmit}>
            <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Sites. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;