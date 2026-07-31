import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-700 py-8">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Yash Arya
          </h2>

          <p className="text-slate-400 mt-2">
            MERN Stack Developer | Java Developer
          </p>
        </div>

        <div className="flex gap-6 text-2xl mt-6 md:mt-0">

          <a
            href="https://github.com/yash0117"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/yash-arya-27003828b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

          {/* <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-cyan-400 transition" />
          </a> */}
          <a 
            href="https://leetcode.com/u/yash_arya01/"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode className="hover:text-cyan-400 transition" />
          </a>

        </div>

      </div>

      <p className="text-center text-slate-500 mt-8">
        © {new Date().getFullYear()} Yash Arya. All Rights Reserved.
      </p>

    </footer>
  );
}