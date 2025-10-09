import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiC, SiCplusplus, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 animate-spin-slow" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "C", icon: <SiC className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
];
const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-6 py-10 rounded-2xl text-white bg-[#302b63] bg-opacity-10 shadow-lg "
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="mt-2 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;