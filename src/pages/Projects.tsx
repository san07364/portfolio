import React from "react";
import config from "../developer.json";

const Projects: React.FC = () => {
  return (
    <main className="page">
      <div id="mobile-page-title">
        <h2>_projects</h2>
      </div>

      <div className="flex flex-col w-full p-8">
        <h1 className="text-3xl font-fira_bold text-white mb-6">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(config.projects).map(([key, project]) => (
            <div
              key={key}
              className="bg-blue-background border border-[#1E2D3D] rounded-lg p-6"
            >
              <h3 className="text-white font-fira_bold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-menu-text font-fira_retina text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#1E2D3D] text-purplefy px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-codeline-link hover:text-white text-sm underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
