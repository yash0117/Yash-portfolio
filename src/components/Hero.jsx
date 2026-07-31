import profile from "../assets/image.jpg";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Yash Arya
          </h1>

          <h2 className="text-2xl text-slate-300 mt-4">
            MERN Stack Developer
          </h2>

          <p className="text-slate-400 mt-6 leading-8">
            I am a passionate Full Stack Developer and B.Tech CSE student.
            I build modern, responsive and scalable web applications using
            React, Node.js, Express and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/yash0117"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-arya-27003828b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400" />
            </a>

            {/* <a href="yasharya481@gmail.com">
              <FaEnvelope className="hover:text-cyan-400" />
            </a> */}

            <a
              href="https://leetcode.com/u/yash_arya01/"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode className="hover:text-cyan-400 transition" />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Yash Arya"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
}