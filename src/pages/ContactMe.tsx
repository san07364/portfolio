import React from "react";
import config from "../developer.json";

const ContactMe: React.FC = () => {
  return (
    <main className="page">
      <div id="mobile-page-title">
        <h2>_contact-me</h2>
      </div>

      <div className="flex flex-col lg:flex-row h-full w-full">
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-fira_bold text-white mb-6">
            Contact Me
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-fira_bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-menu-text font-fira_retina">
                I'm always open to discussing new opportunities, collaborating
                on projects, or just having a chat about technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-fira_bold text-white mb-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <img
                    src="/icons/email.svg"
                    alt="Email"
                    className="w-4 h-4 mr-3"
                  />
                  <span className="text-menu-text font-fira_retina">
                    {config.contacts.direct.sources.email}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-fira_bold text-white mb-3">
                Social Media
              </h3>
              <div className="flex space-x-4">
                {config.contacts.social.github && (
                  <a
                    href={`${config.contacts.social.github.url}${config.contacts.social.github.user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-menu-text hover:text-white"
                  >
                    <img
                      src="/icons/social/github.svg"
                      alt="GitHub"
                      className="w-5 h-5 mr-2"
                    />
                    GitHub
                  </a>
                )}
                {config.contacts.social.linkedin && (
                  <a
                    href={`${config.contacts.social.linkedin.url}${config.contacts.social.linkedin.user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-menu-text hover:text-white"
                  >
                    <img
                      src="/icons/social/linkedin.svg"
                      alt="LinkedIn"
                      className="w-5 h-5 mr-2"
                    />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="bg-blue-background border border-[#1E2D3D] rounded-lg p-6">
            <h3 className="text-white font-fira_bold text-lg mb-4">
              Contact Form
            </h3>
            <p className="text-menu-text font-fira_retina text-sm">
              Contact form functionality coming soon...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMe;
