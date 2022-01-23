import './Navbar.css';
import darkmodeIcon from '../../img/darkmode-icon-128.png';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#resume">RESUME</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <button className="darkmode-button">
          <img
            className="darkmode-icon"
            src={darkmodeIcon}
            alt="Darkmode Icon"
          />
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
