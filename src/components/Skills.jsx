function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: "🎨",
      items: ["React.js", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: "🗄️",
      items: ["MongoDB", "SQL"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>

            <div className="skill-list">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;