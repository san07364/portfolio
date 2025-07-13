import React from "react";
import config from "../developer.json";

const AppFooter: React.FC = () => {
  return (
    <footer className="w-full hidden lg:flex justify-between items-center px-6 py-4 border-t border-[#1E2D3D]">
      <div className="flex items-center space-x-6">
        <span className="text-menu-text font-fira_retina text-sm">
          find me in:
        </span>
        <div className="flex space-x-3">
          {config.contacts.social.github && (
            <a
              href={`${config.contacts.social.github.url}${config.contacts.social.github.user}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-menu-text hover:text-white"
            >
              <img
                src="/icons/social/github.svg"
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>
          )}
          {config.contacts.social.linkedin && (
            <a
              href={`${config.contacts.social.linkedin.url}${config.contacts.social.linkedin.user}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-menu-text hover:text-white"
            >
              <img
                src="/icons/social/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
          )}
        </div>
      </div>
      <div className="text-menu-text font-fira_retina text-sm">
        @{config.contacts.social.github?.user}
      </div>
    </footer>
  );
};

export default AppFooter;
