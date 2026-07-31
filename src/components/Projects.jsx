import { image } from "framer-motion/client";
import ProjectCard from "./ProjectCard";
import zerodhaImg from "../assets/zerodha.png";
import amazonImg from "../assets/amazon.png";
import airbnbImg from "../assets/airbnb.png";

const projects = [
    {
        image: zerodhaImg,
        title: "Zerodha Clone",
        description: "A full-stack stock trading platform built with the MERN stack, JWT authentication, portfolio tracking, and a responsive dashboard.",
        github: "https://github.com/yash0117/zerodha-clone",
        live: "https://zerodha-clone-itgd.onrender.com"
    },
    {
        image: amazonImg,
        title: "Amazon Clone",
        description: "A responsive Amazon-style homepage clone built with HTML5 and CSS3.",
        github: "https://github.com/yash0117/amazon-clone",
        live: "https://amazon-clone-yash15.vercel.app/"
    },
    {
        image: airbnbImg,
        title: "Airbnb Clone",
        description: "A full-stack Airbnb-inspired app with booking flows, authentication, CRUD operations, and image uploads.",
        github: "https://github.com/yash0117/Wanderlust-Airbnb-Clone",
        live: "https://airbnb-clone.vercel.app"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            github={project.github}
                            live={project.live}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
