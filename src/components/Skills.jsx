function Skills() {
  const technicalSkills = [
    {
      icon: "🎨",
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      icon: "🗄️",
      title: "Database & Cloud",
      items: ["MongoDB", "Cloudinary", "Render", "Vercel", "Sevalla"],
    },
    {
      icon: "🛠️",
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "VS Code", "Postman", "CodeRabbit"],
    },
    {
      icon: "💻",
      title: "Programming",
      items: ["Java", "JavaScript"],
    },
  ];

  const softSkills = [
    "Communication",
    "Leadership",
    "Team Collaboration",
    "Problem Solving",
    "Emotional Intelligence",
    "Adaptability",
  ];

  return (
    <section id="skills" className="skills">
      <p className="skills-tag">MY SKILL SET</p>
      <h2>Technical & Soft Skills</h2>

      <div className="skills-content">
        <div className="technical-skills">
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>

          <div className="soft-skill-list">
            {softSkills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;