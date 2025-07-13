import React, { useState, useEffect } from "react";
import config from "../developer.json";
import SnakeGame from "../components/SnakeGame";

const Home: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(config.roles[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const roles = config.roles;
    let roleIndex = 0;

    const roleInterval = setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      setCurrentRole("");

      let roleText = roles[roleIndex];
      let charIndex = 0;

      const typingEffect = setInterval(() => {
        if (charIndex < roleText.length) {
          setCurrentRole((prev) => prev + roleText[charIndex]);
          charIndex++;
        } else {
          clearInterval(typingEffect);
        }
      }, 100);
    }, 3000);

    return () => {
      clearInterval(roleInterval);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main id="hello" className="flex h-full w-full flex-1 overflow-hidden">
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>

      <section className="hero w-full justify-center">
        <div className="head pb-12">
          <span className="text-lg leading-none text-hello-name font-fira_retina">
            Hi all, I am
          </span>
          <h1 className="text-5xl lg:text-6xl leading-none text-hello-name font-fira_regular pt-4 pb-4">
            {config.name}
          </h1>
          <span className="diple flex text-3xl leading-none text-codeline-tag font-fira_retina">
            &gt;&nbsp;
            <h2 className="line-1 anim-typewriter max-w-fit">{currentRole}</h2>
          </span>
        </div>

        <div id="info" className="flex flex-col py-10">
          <span className="text-sm leading-none text-hello-gray font-fira_retina pb-4">
            I'm a software developer with a knack for turning complex challenges
            into elegant solutions. I thrive on diving into new technologies and
            pushing my skills to their limits, always eager to craft innovative
            projects that leave a mark.
          </span>
          <span
            className={`text-sm leading-none text-hello-gray font-fira_retina pb-4 whitespace-pre-line ${
              isMobile ? "hidden" : ""
            }`}
          >
            My Toolkit 🛠️ Frameworks : NestJS, NextJS, ExpressJS, ReactJS,
            Native Android, Flutter, Wordpress Database : Postgres, MySQL,
            MongoDB, Cloud Firestore Languages : Typescript, Javascript, Dart,
            Java, PHP
          </span>
          <span
            className={`text-sm leading-none text-hello-gray font-fira_retina pb-4 ${
              !isMobile ? "hidden" : ""
            }`}
          >
            // You can checkout my resume:
          </span>
          <p className="code font-fira_medium text-hello-name">
            <span className="text-codeline-tag">const</span>
            <span className="text-codeline-name"> _Resume-URL</span>
            <span className="text-white"> = </span>
            <a
              className="text-codeline-link underline underline-offset-4"
              href="https://drive.google.com/file/d/1XFttoHzkW5yNSOqCW8Zsofyj0SubUdbk/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              "https://drive.google.com/file/d/1XFttoHzkW5yNSOqCW8Zsofyj0SubUdbk/view"
            </a>
          </p>
        </div>
      </section>

      {!isMobile && (
        <section
          data-aos="fade-up"
          className="game flex flex-col w-full h-full justify-center z-20"
        >
          <SnakeGame />
        </section>
      )}
    </main>
  );
};

export default Home;
