import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";
import Journey from "./components/Journey";
import FloatingTechIcons from "./components/FloatingTechIcons";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <FloatingTechIcons />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}

export default App;