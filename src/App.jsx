import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec loader
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
