import { FaCode } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <h2 className="logo">
          <FaCode className="logo-icon" />
          <span>💻 Karmugilan R</span>
        </h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Let’s Talk
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
