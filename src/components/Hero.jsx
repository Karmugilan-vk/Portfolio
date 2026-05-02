import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Karmugilan R</h1>
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
        style={{ fontSize: "24px", color: "#38bdf8" }}
      />
      <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
        <button>Download Resume</button>
      </a>
      <p>
        I build responsive and scalable web applications using modern
        technologies.
      </p>
      <button
        onClick={() => {
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        View My Work
      </button>
    </section>
  );
}

export default Hero;
