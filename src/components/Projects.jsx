import React from "react";
import weatherImg from "../assets/weather.png";
import portfolioImg from "../assets/portfolio.png";

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my work and skills.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
      image: portfolioImg,
    },
        {
      title: "Weather App",
      description: "Weather forecast app with real-time API integration.",
      tech: ["HTML", "API", "CSS", "JavaScript"],
      link: "https://weather-app-ebon-one-26.vercel.app/",
      image: weatherImg,
    },
  ];

  return (
    <section
      id="projects"
      className="mt-6 shadow-lg border-2 rounded-2xl border-white/10 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="mx-auto w-full max-w-3xl min-h-64 grid grid-cols-2 md:grid-cols-2 gap-4 items-center text-white border border-blue-400/80 shadow-lg py-8 px-6 rounded-xl"
            >
              {/* Text Side */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, idx) => (
                    <li
                      key={idx}
                      className="border border-blue-400 text-white px-2 py-[2px] rounded text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project
                </a>
              </div>

              {/* Image Side */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-70 h-44 object-fill rounded-md"
                />
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default Project;
