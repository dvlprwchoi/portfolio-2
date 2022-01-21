import './Navbar.css';

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
        <button>theme</button>
      </ul>
    </div>
  );
}

export default Navbar;
