import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
        <li>
          <a href="#">RESUME</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <button>theme</button>
      </ul>
    </div>
  );
}

export default Navbar;
