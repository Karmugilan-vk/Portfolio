import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>Feel free to reach out for opportunities or collaborations.</p>

      <div className="contact-links">
        <a href="mailto:yourmail@gmail.com">📧 Email</a>
        <a href="https://github.com/Karmugilan-vk" target="_blank">
          <FaGithub /> GitHub
        </a>

        <a href="https://linkedin.com/in/your-linkedin" target="_blank">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
