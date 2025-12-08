import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('Message sent — thank you!');
        form.reset();
      } else {
        setStatus(json.error || 'Failed to send message');
      }
    } catch (err) {
      setStatus('Network error — please try again later');
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Reach out to us for any inquiries or collaborations.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status">{status}</p>}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509364!2d-122.4194154846813!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfd8b1b1%3A0x8c2e9e7b1b1b1b1b!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1633036800000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;