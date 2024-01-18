import React from "react";
import "./contactPage.css";
import ContactForm from "./contactForm";
import Location from "./location";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const ContactPage = () => {
  return (
    <>
      <div className="main">
        <h1>Get in touch</h1>
        <div className="contact-main">
          <ContactForm />
          <Location />
        </div>
        {/* <h2>Contact with us on social media</h2>

        <div className="socials">
          <FaTwitter />
          <FaInstagramSquare />
          <FaFacebookSquare />
        </div> */}
      </div>
    </>
  );
};

export default ContactPage;
