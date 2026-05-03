import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        I'm open to internship opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:karmugilanrama@gmail.com">
          <FaEnvelope /> Email
        </a>

        <a
          href="https://github.com/Karmugilan-vk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/karmugilan-r-8aa645321"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;