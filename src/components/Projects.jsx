function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <img src={`${import.meta.env.BASE_URL}chatify.png`} alt="Chatify" className="project-img" />
          <h3>Chatify</h3>
          <p>A full-stack real-time chat application built using the MERN stack.</p>
          <ul>
            <li>Real-time one-to-one messaging</li>
            <li>JWT-based authentication</li>
            <li>Image upload using Cloudinary</li>
          </ul>
          <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Socket.IO</p>
          <div className="project-links">
            <a href="https://chatify-app-tnkv6.sevalla.app/" target="_blank">Live Demo</a>
            <a href="https://github.com/Karmugilan-vk/Chatify-app" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src={`${import.meta.env.BASE_URL}thinkboard.png`} alt="ThinkBoard" className="project-img" />
          <h3>ThinkBoard</h3>
          <p>A MERN-based note management application for managing notes efficiently.</p>
          <ul>
            <li>Create, edit, and delete notes</li>
            <li>REST API integration</li>
            <li>MongoDB database connection</li>
          </ul>
          <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
          <div className="project-links">
            <a href="https://github.com/Karmugilan-vk/mern-thinkboard.git" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src={`${import.meta.env.BASE_URL}temple.png`} alt="Temple Management Web App" className="project-img" />
          <h3>Temple Management</h3>
          <p>A group project for managing temple services and user interactions.</p>
          <ul>
            <li>Designed homepage and dashboard UI</li>
            <li>Built responsive layout using EJS</li>
            <li>Collaborated with team integration</li>
          </ul>
          <p><strong>Tech Stack:</strong> Node.js, Express, EJS, SQL Server</p>
          <div className="project-links">
            <a href="https://github.com/Sanjai-Magilan/Temple_Web_App.git" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;