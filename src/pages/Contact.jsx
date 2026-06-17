import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Wire to Formspree or EmailJS when ready
    setSubmitted(true);
  };

  return (
    <div className="contact">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          Questions, custom orders, or just want to say hi — we'd love to
          hear from you. We typically respond within one business day.
        </p>
      </section>

      {/* ── BODY ── */}
      <section className="contact-body">

        {/* INFO PANEL */}
        <div className="contact-info-panel">

          <div className="info-card">
            <h2>📍 Find Us</h2>
            <p>123 Main Street<br />Toledo, OH 43604</p>
          </div>

          <div className="info-card">
            <h2>🕐 Hours</h2>
            <ul className="hours-list">
              <li><span>Mon – Fri</span><span>7am – 6pm</span></li>
              <li><span>Saturday</span><span>7am – 4pm</span></li>
              <li><span>Sunday</span><span>7am – 4pm</span></li>
            </ul>
          </div>

          <div className="info-card">
            <h2>📞 Contact</h2>
            <p><a href="tel:4195550192">(419) 555-0192</a></p>
            <p><a href="mailto:hello@sweetrisebakery.com">hello@sweetrisebakery.com</a></p>
          </div>

          <div className="info-card highlight">
            <h2>📦 Custom Orders</h2>
            <p>
              We require <strong>48 hours notice</strong> for all custom
              orders. Use the form to get started and we'll confirm
              availability and pricing.
            </p>
          </div>

        </div>

        {/* FORM PANEL */}
        <div className="contact-form-panel">
          {submitted ? (
            <div className="form-success">
              <span className="success-emoji">🍞</span>
              <h2>Thanks for reaching out!</h2>
              <p>We'll get back to you within one business day. In the meantime, come visit us on Main Street!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number <span className="optional">(optional)</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(419) 555-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="orderType">What can we help you with?</label>
                <select
                  id="orderType"
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option...</option>
                  <option value="custom-bread">Custom Bread Order</option>
                  <option value="custom-rolls">Custom Roll Order</option>
                  <option value="custom-pastry">Custom Pastry Box</option>
                  <option value="event">Event or Wedding Order</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you're looking for, including any dates, quantities, or special requests..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          )}
        </div>

      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="contact-map">
        <div className="map-placeholder">
          <span>📍 123 Main Street, Toledo, OH</span>
          <p>Map embed coming soon</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;