function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-main-card">
          <p className="about-label">Who I Am</p>

          <h3>
            Full Stack Developer passionate about building
        modern, scalable, and user-focused applications.
          </h3>

          <p>
            I'm Karmugilan R, a developer passionate about creating
modern web applications with clean design, scalable backend
systems, and seamless user experiences.
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
            <p>Developing responsive frontend interfaces and scalable
          backend applications using modern technologies.</p>
          </div>

          <div className="about-info-card">
            <h4>⚡ Problem Solving</h4>
            <p>Enjoy solving real-world challenges through clean,
          efficient, and maintainable code.</p>
          </div>

          <div className="about-info-card">
            <h4>🚀 Career Goal</h4>
            <p>Working towards becoming a skilled software engineer
          and contributing to impactful products.</p>
          </div>

          <div className="about-info-card">
            <h4>📚 Continuous Learning</h4>
            <p>Constantly improving in full-stack development,
          Java, backend systems, and UI design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;