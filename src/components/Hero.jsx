import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="hero-tag">Welcome to my portfolio</p>

          <h1>
            Hi, I'm <span>Karmugilan R</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1500,
              "Full Stack Developer",
              1500,
              "Open Source Enthusiast",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />

          <p className="hero-quote">
            "Building scalable web applications with clean UI and strong backend logic"
          </p>

          <p className="hero-description">
            I build responsive and scalable web applications using React,
            Node.js, Express, and MongoDB.
          </p>


          <div className="hero-buttons">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </button>

            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
              <button className="outline-btn">Explore Resume</button>
            </a>
          </div>

          <div className="hero-highlights">
            <span>3+ Projects Built</span>
            <span>MERN Stack</span>
            <span>Open to Internship</span>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Karmugilan R"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;