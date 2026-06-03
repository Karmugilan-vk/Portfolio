function FeaturedProject() {
  return (
    <section className="featured-project-section">

      <div className="featured-project-container">

        {/* LEFT */}
        <div className="featured-left">

          <p className="featured-tag">
            FEATURED PROJECT
          </p>

          <h2>
            Chatify – Real-Time Chat Application
          </h2>

          <p className="featured-description">
            A modern full-stack real-time chat application built using the
            MERN stack with Socket.IO for instant communication and seamless
            user experience.
          </p>

          {/* FEATURES */}
          <div className="featured-features">

            <div className="feature-box">
              ⚡ Real-time Messaging
            </div>

            <div className="feature-box">
              🔐 JWT Authentication
            </div>

            <div className="feature-box">
              ☁️ Cloudinary Uploads
            </div>

            <div className="feature-box">
              📱 Responsive UI
            </div>

          </div>

          {/* TECH STACK */}
          <div className="featured-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Socket.IO</span>
          </div>

          {/* BUTTONS */}
          <div className="featured-buttons">

            <a
              href="https://github.com/Karmugilan-vk/Chatify-app"
              target="_blank"
              className="outline-btn"
            >
              GitHub
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="featured-right">

          <img
            src={`${import.meta.env.BASE_URL}chatify.png`}
            alt="Chatify"
          />

        </div>

      </div>

    </section>
  );
}

export default FeaturedProject;