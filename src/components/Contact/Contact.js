import './Contact.css';

import React from 'react';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>CONTACT</h2>
      <div className="contact-information-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/woosikchoi" target="_blank">
              Linked In
            </a>
          </li>
          <li>
            <a href="https://www.github.com/dvlprwchoi" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:dvlpr.wchoi@gmail.com?subject=Mail from woosikchoi.com"
              target="_blank"
            >
              email
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/dvlprwchoi" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
