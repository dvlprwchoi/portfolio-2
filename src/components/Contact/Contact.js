import './Contact.css';
import linkedinIcon from '../../img/linkedin-icon.png';
import githubIcon from '../../img/github-icon.png';
import gmailIcon from '../../img/gmail-icon.png';
import twitterIcon from '../../img/twitter-icon.png';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>CONTACT</h2>
      <div className="contact-information-container">
        <ul>
          <li className="icon-container">
            <a
              className="icon-link-container"
              href="https://www.linkedin.com/in/woosikchoi"
              target="_blank"
            >
              <img
                className="linkedin-icon icon"
                src={linkedinIcon}
                alt="LinkedIn Icon"
                width="15%"
                height="auto"
              />
            </a>
          </li>
          <li className="icon-container">
            <a
              className="icon-link-container"
              href="https://www.github.com/dvlprwchoi"
              target="_blank"
            >
              <img
                className="github-icon icon"
                src={githubIcon}
                alt="GitHub Icon"
                width="15%"
                height="auto"
              />
            </a>
          </li>
          <li className="icon-container">
            <a
              className="icon-link-container"
              href="mailto:dvlpr.wchoi@gmail.com?subject=Mail from woosikchoi.com"
              target="_blank"
            >
              <img
                className="gmail-icon icon"
                src={gmailIcon}
                alt="Gmail Icon"
                width="15%"
                height="auto"
              />
            </a>
          </li>
          <li className="icon-container">
            <a
              className="icon-link-container"
              href="https://www.twitter.com/dvlprwchoi"
              target="_blank"
            >
              <img
                className="twitter-icon icon"
                src={twitterIcon}
                alt="Twitter Icon"
                width="15%"
                height="auto"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
