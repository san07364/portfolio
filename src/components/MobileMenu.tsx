import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from "../developer.json";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-background border border-[#1E2D3D] rounded"
      >
        <img
          src={isOpen ? "/icons/burger-close.svg" : "/icons/burger.svg"}
          alt="Menu"
          className="w-6 h-6"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-blue-background z-40 flex flex-col p-6 pt-20">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-menu-text font-fira_retina text-lg py-2 hover:text-white"
              onClick={toggleMenu}
            >
              _hello
            </Link>
            <Link
              to="/about-me"
              className="text-menu-text font-fira_retina text-lg py-2 hover:text-white"
              onClick={toggleMenu}
            >
              _about-me
            </Link>
            <Link
              to="/projects"
              className="text-menu-text font-fira_retina text-lg py-2 hover:text-white"
              onClick={toggleMenu}
            >
              _projects
            </Link>
            <Link
              to="/contact-me"
              className="text-menu-text font-fira_retina text-lg py-2 hover:text-white"
              onClick={toggleMenu}
            >
              _contact-me
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
