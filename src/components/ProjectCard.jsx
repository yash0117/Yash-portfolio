import { motion } from "framer-motion";
import fallbackImage from "../assets/image.jpg";

export default function ProjectCard({
  image,
  title,
  description,
  github,
  live,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg"
    >
      <img
        src={image || fallbackImage}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>

        <p className="text-slate-400 mb-5">
          {description}
        </p>

        <div className="flex gap-4">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-black"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}