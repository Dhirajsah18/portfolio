import React, { useState } from "react";
import Landing_pageImg from "../assets/Landing_page.png";
import portfolioImg from "../assets/portfolio.png";
import Video_summarizerImg from "../assets/Video_summarizer.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "V-Tube",
      description:
        "V-Tube is a YouTube-inspired video sharing application where users can upload, post tweets, like, and comment on videos.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Tailwind CSS",
        "JavaScript",
      ],
    },
    {
      title: "Intelligent Video Summarization Platform",
      description:
        "An AI-powered web application that converts long videos into concise summaries using Speech Recognition and NLP models.",
      tech: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI"],
      image: Video_summarizerImg,
    },
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my projects and skills.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://portfolio-sigma-five-34ng18nlu6.vercel.app/",
      image: portfolioImg,
    },
    {
      title: "Creative Showcase",
      description:
        "A full-stack platform to upload, explore, and showcase creative images in a Pinterest-style masonry layout.",
      tech: [
        "React (Vite)",
        "Tailwind CSS",
        "JavaScript",
        "JWT Authentication",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      link: "https://intern-technical-assessment.vercel.app/",
      image: Landing_pageImg,
    },
  ];

  return (
  <section
    id="projects"
    className="
      relative
      py-2       
      mt-10      
    "
  >
    {/* Optional Section Heading */}
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Projects
      </h2>
    </div>

    {/* Projects Grid */}
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => setSelectedProject(project)}
          className=" glass
            group cursor-pointer
            w-full min-h-64
            grid grid-cols-1 md:grid-cols-2 gap-5
            items-center
            text-white
            border border-blue-400/50
            bg-white/5 backdrop-blur-md
            shadow-lg py-4 px-5 rounded-xl
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-blue-500/30
            hover:border-blue-400
          "
        >
          {/* Text Side */}
          <div className="order-1">
            <h3 className="text-lg font-semibold mb-1">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-3 text-sm">
              {project.description}
            </p>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, idx) => (
                <li key={idx} className="relative group/tech">
                  <span
                    className="
                      border border-blue-400/70
                      text-white px-2 py-[2px]
                      rounded text-xs
                      transition
                      group-hover/tech:bg-blue-400
                      group-hover/tech:text-black
                    "
                  >
                    {tech}
                  </span>

                  {/* Tooltip */}
                  <span
                    className="
                      absolute -top-7 left-1/2 -translate-x-1/2
                      whitespace-nowrap
                      bg-black text-white text-[10px]
                      px-2 py-1 rounded
                      opacity-0 group-hover/tech:opacity-100
                      transition pointer-events-none
                    "
                  >
                    Used in this project
                  </span>
                </li>
              ))}
            </ul>

            {project.link && (
              <span className="text-blue-400 text-sm font-medium">
                Click to view details →
              </span>
            )}
          </div>

          {/* Image Side */}
          <div className="order-2 flex justify-center md:justify-end">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full max-w-xs h-40 md:h-44
                  object-cover rounded-lg
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Project Modal */}
    {selectedProject && (
      <div className="glass fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="relative bg-[#0f172a] text-white max-w-lg w-full mx-4 p-6 rounded-xl shadow-xl">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

          {selectedProject.image && (
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}

          <h3 className="text-xl font-semibold mb-2">
            {selectedProject.title}
          </h3>

          <p className="text-gray-300 text-sm mb-4">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {selectedProject.tech.map((t, i) => (
              <span
                key={i}
                className="border border-blue-400/70 px-2 py-[2px] text-xs rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {selectedProject.link && (
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:underline text-sm"
            >
              Visit Live Project →
            </a>
          )}
        </div>
      </div>
    )}
  </section>
);

};

export default Project;
