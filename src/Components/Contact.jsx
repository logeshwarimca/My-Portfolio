import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from 'react-icons/fa';
import '../css/Contact.css';
import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';
import contactvdo from '../imgs/contactvdo.mp4'


const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send mail to ADMIN
    emailjs
      .sendForm(
        "service_mj4653n",
        "template_x11awhe",
        formRef.current,
        "1rJ0L-pxGCnkt8vfT"
      )
      .then(() => {
        // Send mail to USER
        return emailjs.sendForm(
          "service_mj4653n",
          "template_qbdnq0t",
          formRef.current,
          "1rJ0L-pxGCnkt8vfT"
        );
      })
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message!");
      });
  };

  return (
    <div className="contact-wrapper" id='contact'>
            {/* Background Video */}
  <video
    className="bg-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={contactvdo} type="video/mp4" />
  </video>
      {/* Background Circuit Decoration */}
      <div className="circuit-lines"></div>
      
      <div className="contact-container">
        <h1 className="contact-header">
          Get In Touch <span className="arrow-icon">➤</span>
        </h1>

        <div className="glass-card">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <FaUser className="field-icon" />
                <input type="text" name='name' placeholder="Your Name" required />
                <div className="underline"></div>
              </div>

              <div className="input-field">
                <FaEnvelope className="field-icon" />
                <input type="email" name='email' placeholder="Your Email" required />
                <div className="underline"></div>
              </div>

              <div className="input-field">
                <FaPen className="field-icon" />
                <input type="text" name='subject' placeholder="Subject" required />
                <div className="underline"></div>
              </div>

              <div className="input-field textarea-field">
                <FaPen className="field-icon message-icon" />
                <textarea placeholder="Message" name='message' rows="4" required></textarea>
                <div className="underline"></div>
              </div>
            </div>

            <button type="submit" className="send-btn">
              <FaPaperPlane className="send-icon" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;