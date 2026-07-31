import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "DSA",
  "Git",
  "GitHub",
  "Tailwind CSS"
];

export default function Skills() {

  return (

<section id="skills" className="bg-slate-800 py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">

Skills

</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{skills.map((skill,index)=>(

<motion.div

key={index}

initial={{opacity:0,scale:0.8}}

whileInView={{opacity:1,scale:1}}

transition={{delay:index*0.05}}

viewport={{once:true}}

className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 text-center"

>

{skill}

</motion.div>

))}

</div>

</div>

</section>

  );
}