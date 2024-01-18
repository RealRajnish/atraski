import React from "react";
import "./location.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Location = () => {
  return (
    <div className="location">
      <h2>Contact with us on social media</h2>

      <div className="socials">
        <FaTwitter />
        <FaInstagramSquare />
        <FaFacebookSquare />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.33008998807!2d77.2456889!3d28.5372392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce33203380ced%3A0xa1d009a2831bb7a3!2sAtraski%20India!5e0!3m2!1sen!2sin!4v1705575029432!5m2!1sen!2sin"
        // width="500"
        // height="300"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="map"
      ></iframe>
    </div>
  );
};

export default Location;
