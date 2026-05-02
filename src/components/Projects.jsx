function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {/* Chatify */}
        <div className="project-card">
          <h3>Chatify</h3>
          <p>
            A full-stack real-time chat application built using the MERN stack
            with Socket.IO for instant messaging.
          </p>

          <ul>
            <li>Real-time one-to-one messaging</li>
            <li>JWT-based authentication</li>
            <li>Image upload using Cloudinary</li>
            <li>Responsive UI with React</li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Socket.IO
          </p>

          <div className="project-links">
            <a
              href="https://chatify-app-tnkv6.sevalla.app/"
              target="_blank"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Karmugilan-vk/Chatify-app"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* ThinkBoard */}
        <div className="project-card">
          <h3>ThinkBoard</h3>
          <p>
            A MERN-based note management application to create, update, and manage notes efficiently.
          </p>

          <ul>
            <li>Create, edit, and delete notes</li>
            <li>REST API integration</li>
            <li>MongoDB database connection</li>
            <li>Clean and responsive UI</li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB
          </p>

          <div className="project-links">
            <a
              href="https://github.com/Karmugilan-vk/ThinkBoard-Application"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;