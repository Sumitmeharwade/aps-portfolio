import React from "react";
import "./Styles/contact.css";

import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
// import whatsapp from "./images/whatsapp.png";
import github from "./images/github.png";

import sumit from './images/sumit photo.jpg'


const ContactUs = () => {
  return (
    <div className="us">
      
      <div className="card1">
        <img src={sumit} alt="https://www.instagram.com/sumit_meharwade" />
        <p>Sumit Meharwade</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sumitmeharwade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/sumitmeharwade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          {/* <a
            href="https://wa.me/0987654321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a> */}
          <a
            href="https://www.instagram.com/sumitmeharwade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="contact-info">
        <h2>Feel free to connect with me!</h2>
        <p>
          If you have any questions, suggestions, or just want to say hello, don't hesitate to reach out. I'm always open to new connections and collaborations.
        </p>
        <p>
          You can contact me through any of the social media platforms, or send me an email  <a href="mailto:sumitmeharwade1@gmail.com">here</a>
        </p><br/>
        {/* <ul>
          <li>Email: sumit@example.com</li>
          <li>Phone: +1 123-456-7890</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/sumitmeharwade" target="_blank" rel="noopener noreferrer">sumitmeharwade</a></li>
          <li>GitHub: <a href="https://github.com/sumitmeharwade" target="_blank" rel="noopener noreferrer">sumitmeharwade</a></li>
          <li>Instagram: <a href="https://www.instagram.com/sumitmeharwade" target="_blank" rel="noopener noreferrer">sumitmeharwade</a></li>
        </ul> */}
        <p>
          I look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
