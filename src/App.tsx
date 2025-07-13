import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MobileMenu from "./components/MobileMenu";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <MobileMenu />
        <AppHeader />
        <main data-aos="fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
