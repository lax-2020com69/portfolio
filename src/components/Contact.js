import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

// Load from .env
const service_ID = process.env.REACT_APP_SERVICE_ID;
const template_ID = process.env.REACT_APP_TEMPLATE_ID;
const public_key = process.env.REACT_APP_PUBLIC_KEY;

const email = process.env.REACT_APP_EMAIL;
const linkedIn = process.env.REACT_APP_LINKEDIN;
const github = process.env.REACT_APP_GITHUB;
// console.log("github: " , process.env.REACT_APP_GITHUB); // Should not be undefined

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [confirmPopup, setConfirmPopup] = useState({ show: false });
  const [resultPopup, setResultPopup] = useState({ show: false, success: true, message: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setConfirmPopup({ show: true });
  };

  const sendEmail = () => {
    emailjs.send(
      service_ID,
      template_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      public_key
    )
    .then(() => {
      setResultPopup({
        show: true,
        success: true,
        message: `✅ Message sent! Thanks, ${formData.name}. I'll get back to you soon.`,
      });
      setFormData({ name: "", email: "", message: "" });
      setConfirmPopup({ show: false });
    })
    .catch((error) => {
      setResultPopup({
        show: true,
        success: false,
        message: "❌ Oops! Something went wrong. Please try again later.",
      });
      console.error("EmailJS error:", error);
      setConfirmPopup({ show: false });
    });
  };

  const closeConfirm = () => setConfirmPopup({ show: false });
  const closeResult = () => setResultPopup({ ...resultPopup, show: false });
  const handleReset = () => setFormData({ name: "", email: "", message: "" });

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>
        Feel free to reach out at:{" "}
        <a href={`mailto:${email}`}><FaEnvelope className="icon" /></a>
      </p>

      <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Your name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Your email"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          aria-label="Your message"
        />
        <button type="submit" className="submit-btn" aria-label="Send your message">Send Message</button>
      </form>

      <div className="social-links">
        <p>Or connect with me on:</p>
        <div className="social-icons">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
        </div>
      </div>

      {/* Confirmation Popup */}
      {confirmPopup.show && (
        <div className="popup-overlay" role="dialog" aria-modal="true" onClick={closeConfirm}>
          <div className="popup-message" onClick={(e) => e.stopPropagation()}>
            <h3>Confirm Your Message</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong></p>
            <div className="message-box">{formData.message}</div>

            <div className="popup-buttons">
              <button onClick={sendEmail} className="yes-btn">✅ Yes, Send</button>
              <button onClick={closeConfirm} className="no-btn">❌ No, Cancel</button>
              <button onClick={() => { handleReset(); closeConfirm(); }} className="clear-btn">🧹 Clear Form</button>
            </div>
          </div>
        </div>
      )}

      {/* Result Popup */}
      {resultPopup.show && (
        <div className="popup-overlay" role="alertdialog" aria-modal="true" onClick={closeResult}>
          <div className={`popup-message ${resultPopup.success ? "success" : "error"}`} onClick={(e) => e.stopPropagation()}>
            <p>{resultPopup.message}</p>
            <div className="popup-buttons">
              <button onClick={closeResult} className="close-btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
