import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-10 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-[50px] flex justify-between items-center">
        <a href="#about" className="text-2xl text-gray-200 hover:text-white font-bold">
          My Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li><a href="#about" className="text-gray-100 hover:text-sky-400">About</a></li>
          <li><a href="#skills" className="text-gray-100 hover:text-sky-400">Skills</a></li>
          <li><a href="#projects" className="text-gray-100 hover:text-sky-400">Projects</a></li>
          <li><a href="#education" className="text-gray-100 hover:text-sky-400">Education</a></li>
          <li><a href="#contact" className="text-gray-100 hover:text-sky-400">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 group focus:outline-none"
          >
            <span className={`w-8 h-0.5 bg-gray-200 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-8 h-0.5 bg-gray-200 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`w-8 h-0.5 bg-gray-200 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#24243e] bg-opacity-[99%] backdrop-blur-md z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full font-semibold text-2xl space-y-8 text-white">
          {["about", "skills", "projects", "education", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-400 transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
