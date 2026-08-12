import ProjectCard from "./ProjectCard";

import zerodhaImg from "../assets/zerodha.png";
import amazonImg from "../assets/amazon.png";
import mangalShringarImg from "../assets/mangal-shringar.png";

const projects = [
    {
        image: zerodhaImg,
        title: "Zerodha Clone",
        description:
            "A full-stack stock trading platform built with the MERN stack featuring JWT authentication, portfolio tracking, trading workflows, and a responsive dashboard.",
        github: "https://github.com/yash0117/zerodha-clone",
        live: "https://zerodha-clone-itgd.onrender.com",
    },

    {
        image: amazonImg,
        title: "Amazon Clone",
        description:
            "A responsive Amazon-style e-commerce interface built with HTML5 and CSS3, focusing on reusable layouts, product sections, and responsive design.",
        github: "https://github.com/yash0117/amazon-clone",
        live: "https://amazon-clone-yash15.vercel.app/",
    },

    {
        image: mangalShringarImg,
        title: "Mangal Shringar",
        description:
            "A production-deployed MERN e-commerce platform for Laddu Gopal Ji dresses, jewelry, and devotional accessories with JWT authentication, role-based admin access, Cloudinary image uploads, product search, wishlist, cart, reviews, Cash on Delivery checkout, and order management.",
        github:
            "https://github.com/yash0117/mangal-shringar-ecommerce",
        live:
            "https://mangal-shringar-ecommerce-beta.vercel.app/",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-20 bg-slate-900"
        >
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