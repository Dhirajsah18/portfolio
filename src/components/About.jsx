import profileImg from "../assets/your-image.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import "aos/dist/aos.css";
/* Hero Section */
const About = () => (
  <section
    id="home"
    className="glass mt-[50px] w-full grid md:grid-cols-2 gap-10 place-content-center md:px-20 pt-5 pb-10 rounded-2xl bg-[#302b63] bg-opacity-10 shadow-lg border-2 border-white/10"
  >
    {/* Glowing Border */}
    <div className="absolute inset-0 rounded-2xl border-4 border-blue-500 blur-lg opacity-20 pointer-events-none animate-pulse"></div>

    {/* LEFT SIDE */}
    <div
      className="z-10 text-center md:text-left"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Rotating Text */}
      <div className="relative h-8 w-full overflow-hidden text-lg md:text-xl font-medium text-white mb-2">
        <div className="absolute inset-0 flex flex-col items-start justify-center">
          <div className="fade-zoom-word absolute">Frontend Developer 💻</div>
          <div className="fade-zoom-word absolute">Backend Developer 🖥️</div>
          <div className="fade-zoom-word absolute">Full Stack Developer 🌐</div>
          <div className="fade-zoom-word absolute">Web Developer 🚀</div>
          <div className="fade-zoom-word absolute">Coder 👨‍💻</div>
        </div>
      </div>

      <p className="text-6xl md:text-6xl font-semibold leading-tight text-gray-100">
        HI, I’M{" "}
        <br></br>
        <span className="bg-gradient-to-r from-[#2cc8fc] to-[#7facbc] bg-clip-text text-transparent ">
          DHIRAJ KUMAR SAH
        </span>
      </p>
      <p className="text-gray-300 md:text-lg text-base max-w-[600px] md:max-w[600px] mt-4">
        Continuously improving my skills to build responsive and scalable web applications, blending both frontend and backend development.
        Passionate about full-stack development and creating impactful projects.
      </p>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 mt-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dhirajsah18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl hover:text-blue-400 transform hover:scale-110 transition duration-300"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Dhirajsah18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl hover:text-blue-400 transform hover:scale-110 transition duration-300"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:dhirajsah2003@gmail.com"
          className="text-white text-5xl hover:text-blue-400 transform hover:scale-110 transition duration-300"
          title="Contact Me"
        >
          <FaEnvelope />
        </a>

        {/* Get CV Button */}
        <a
          href="/your-cv.pdf"
          download
          className="px-4 py-3 text-lg text-white font-semibold border-2 rounded-lg hover:bg-gray-100 hover:text-blue-900 hover:scale-105 transform transition duration-300"
        >
          Get CV
        </a>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div
      className="z-10 grid place-items-center"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <img
        src={profileImg}
        alt="Profile"
        className="w-72 md:w-[300px] h-[250px] border-dashed rounded-full text-white/50 grid place-items-center"
      />
    </div>
  </section>
);

export default About;
