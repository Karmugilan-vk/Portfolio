function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Karmugilan R</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Hi, I'm Karmugilan R</h1>
        <h3>Full Stack Developer | Open Source Enthusiast</h3>
        <p>
          Passionate about building impactful web applications and contributing
          to the open source community.
        </p>
        <button>View My Work</button>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-card">
            <h3>Chatify</h3>
            <p>
              A full-stack real-time chat application built using the MERN stack
              with Socket.IO for instant messaging.
            </p>
            <ul>
              <li>Real-time one-to-one messaging</li>
              <li>User authentication with JWT</li>
              <li>Image upload using Cloudinary</li>
              <li>Responsive frontend using React</li>
            </ul>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Socket.IO</p>
            <a href="https://chatify-app-tnkv6.sevalla.app/" target="_blank">
              Live Demo
            </a>
          </div>

          <div className="project-card">
            <h3>ThinkBoard</h3>
            <p>
              A MERN-based note management application that allows users to
              create, update, and manage notes efficiently.
            </p>
            <ul>
              <li>Create, edit, and delete notes</li>
              <li>REST API integration</li>
              <li>MongoDB database connection</li>
              <li>Clean and responsive UI</li>
            </ul>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
            <a href="https://github.com/Karmugilan-vk/ThinkBoard-Application" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;