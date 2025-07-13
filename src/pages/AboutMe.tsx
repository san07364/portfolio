import config from "../developer.json";

const AboutMe: React.FC = () => {
  return (
    <main className="page">
      <div id="mobile-page-title">
        <h2>_about-me</h2>
      </div>

      <div className="flex flex-col lg:flex-row h-full w-full">
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-fira_bold text-white mb-6">About Me</h1>
          <div className="text-menu-text font-fira_retina space-y-4">
            <p>
              I am {config.name}, a passionate Front-end Developer, AI
              Enthusiast, and Web Security Learner with expertise in AI,
              Cybersecurity, Web Development, Cloud Computing, and Blockchain.
            </p>
            <p>
              With a Bachelor's in Computer Science & Engineering, I have built
              projects ranging from AI-powered Resume Screeners and Chat-bots to
              Cybersecurity tools like Phishing Detection and Network
              Monitoring.
            </p>
            <p>
              My skills extend to Web & Software Development, Cloud Deployment,
              and Game Development, focusing on scalable, innovative, and secure
              applications.
            </p>
          </div>
        </div>

        <div className="flex-1 p-8">
          <h2 className="text-2xl font-fira_bold text-white mb-6">Skills</h2>
          <div className="text-menu-text font-fira_retina space-y-2">
            <div>
              <strong className="text-white">Programming & Development:</strong>{" "}
              Python, JavaScript, HTML, CSS, React, Node.js, Flask, Django
            </div>
            <div>
              <strong className="text-white">AI & Machine Learning:</strong>{" "}
              NLP, Deep Learning, TensorFlow, OpenCV
            </div>
            <div>
              <strong className="text-white">Cybersecurity:</strong> Ethical
              Hacking, Network Security, Phishing Detection
            </div>
            <div>
              <strong className="text-white">Cloud & DevOps:</strong> AWS,
              Docker, Kubernetes, Terraform, CI/CD
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
