function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-main-card">
          <p className="about-label">Who I Am</p>

          <h3>
            MERN Stack Developer focused on building clean, scalable web apps.
          </h3>

          <p>
            I'm Karmugilan R, an ECE student passionate about full-stack
            development, real-time applications, and modern web technologies.
          </p>

          <div className="about-points">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-info-card">
            <h4>💻 Development</h4>
            <p>Building responsive frontend and backend applications.</p>
          </div>

          <div className="about-info-card">
            <h4>⚡ Real-time Apps</h4>
            <p>Created Chatify using Socket.IO for instant messaging.</p>
          </div>

          <div className="about-info-card">
            <h4>🚀 Current Goal</h4>
            <p>Seeking a software development internship opportunity.</p>
          </div>

          <div className="about-info-card">
            <h4>📚 Learning</h4>
            <p>Improving Java, MERN stack, and problem-solving skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;