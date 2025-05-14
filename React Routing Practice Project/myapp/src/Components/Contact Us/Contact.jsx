import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or support needs, feel free to reach out to us using the information below.</p>

      <div className="contact-info">
        <h2>Email Us</h2>
        <p>Email: <a href="mailto:support@carrental.com">support@carrental.com</a></p>

        <h2>Call Us</h2>
        <p>Phone: <a href="tel:+923001112222">+92 300 1112222</a></p>

        <h2>Chat on Skype</h2>
        <p>Skype: <a href="skype:live:carrentalhelp?chat">live:carrentalhelp</a></p>
      </div>
    </div>
  );
};

export default Contact;
