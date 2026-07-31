import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">

      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
      >

        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="text-slate-300 leading-8 text-lg">

          I am a passionate Computer Science student pursuing B.Tech in
          Computer Science & Engineering. I specialize in MERN Stack
          Development and enjoy building responsive web applications.

          Currently, I am preparing for product-based company placements by
          improving my Java, DSA and Full Stack Development skills.

        </p>

      </motion.div>

    </section>
  );
}