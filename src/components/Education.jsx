import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2022 - 2026",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Brainware University",
      details: "CGPA: 8.9",
    },
    {
      year: "2021",
      degree: "Higher Secondary (Class 12)",
      institution: "Kendriya Vidyalaya",
      details: "Percentage: 81.8%",
    },
    {
      year: "2019",
      degree: "Secondary (Class 10)",
      institution: "Kendriya Vidyalaya",
      details: "Percentage: 81%",
    },
  ];

  return (
    <section id="education" className="mt-4 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          My Education and Qualifications
        </h2>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative z-10 bg-opacity-10 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full md:w-3/4 mx-auto text-white"
              >
                <p className="text-sm text-gray-300">{edu.year}</p>
                <h3 className="text-2xl font-semibold mt-1">{edu.degree}</h3>
                <p className="text-blue-300 text-xl font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-300 mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
