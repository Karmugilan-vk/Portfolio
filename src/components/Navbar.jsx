import { FaCode, FaMoon, FaSun } from "react-icons/fa";

function Navbar({ theme, toggleTheme }) {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <h2 className="logo">
          <FaCode className="logo-icon" />
          <span>Karmugilan R</span>
        </h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            className="resume-btn"
          >
            Resume
          </a>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
