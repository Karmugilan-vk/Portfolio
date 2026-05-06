import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <p className="contact-tag">LET’S CONNECT</p>

        <h2>Contact Me</h2>

        <p className="contact-description">
          I'm currently open to internship opportunities, freelance work,
          and collaborations. Feel free to connect with me through any platform.
        </p>
      </div>

      <div className="contact-container">

        {/* EMAIL */}
        <a
          href="mailto:karmugilanrama@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <div>
            <h3>Email</h3>
            <p>karmugilanrama@gmail.com</p>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/Karmugilan-vk"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaGithub />
          </div>

          <div>
            <h3>GitHub</h3>
            <p>View My Projects</p>
          </div>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/karmugilan-r-8aa645321"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaLinkedin />
          </div>

          <div>
            <h3>LinkedIn</h3>
            <p>Professional Network</p>
          </div>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918973345751"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaWhatsapp />
          </div>

          <div>
            <h3>WhatsApp</h3>
            <p>Quick Connect</p>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Contact;