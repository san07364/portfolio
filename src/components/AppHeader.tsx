import React from "react";
import { Link, useLocation } from "react-router-dom";
import config from "../developer.json";

const AppHeader: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header id="navbar" className="w-full hidden lg:flex flex-col">
      <nav className="w-full flex justify-between border-bot">
        <div className="flex">
          <Link
            id="nav-logo"
            to="/"
            className="text-menu-text font-fira_retina px-6 h-full flex items-center border-right hover:bg-[#1e2d3d74] hover:text-white"
          >
            {config.logo_name}
          </Link>

          <Link
            id="nav-link"
            to="/"
            className={`text-menu-text font-fira_retina px-6 h-full flex items-center border-right hover:bg-[#1e2d3d74] hover:text-white ${
              isActive("/") ? "border-b-2 border-[#FEA55F] text-white" : ""
            }`}
          >
            _hello
          </Link>

          <Link
            id="nav-link"
            to="/about-me"
            className={`text-menu-text font-fira_retina px-6 h-full flex items-center border-right hover:bg-[#1e2d3d74] hover:text-white ${
              isActive("/about-me")
                ? "border-b-2 border-[#FEA55F] text-white"
                : ""
            }`}
          >
            _about-me
          </Link>

          <Link
            id="nav-link"
            to="/projects"
            className={`text-menu-text font-fira_retina px-6 h-full flex items-center border-right hover:bg-[#1e2d3d74] hover:text-white ${
              isActive("/projects")
                ? "border-b-2 border-[#FEA55F] text-white"
                : ""
            }`}
          >
            _projects
          </Link>
        </div>

        <Link
          id="nav-link-contact"
          to="/contact-me"
          className={`text-menu-text font-fira_retina px-6 h-full flex items-center border-left hover:bg-[#1e2d3d74] hover:text-white ${
            isActive("/contact-me")
              ? "border-b-2 border-[#FEA55F] text-white"
              : ""
          }`}
        >
          _contact-me
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;
