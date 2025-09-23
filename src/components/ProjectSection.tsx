"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { prefix } from "@/utils/projectDirectory";

const projectsData = [
    {
        id: 1,
        title: "Damee Chaowei - Presentation Website",
        description:
            "Frontend: Next.js, Backend: Node.js, Database: PostgresSql, Nginx reverse proxy. Work as a full stack developer.",
        image: `${prefix}/images/projects/damee.png`,
        tag: ["All", "Web"],
        gitUrl: "http://3.27.125.69/en",
        previewUrl: "http://3.27.125.69/en",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "Based on React. Work as a font-end developer.",
        image: `${prefix}/images/projects/portfolio.png`,
        tag: ["All", "Web"],
        gitUrl: "https://cirnono.github.io/portfolio/",
        previewUrl:
            "https://drive.google.com/file/d/1OIW8uOZ1DULGBDYMjo-Xoi8pGbMqKGyJ/view?usp=drive_link",
    },
    {
        id: 3,
        title: "FFXIV Strategy Website",
        description:
            "A raid strategy planning tool for Final Fantasy XIV, built with Next.js and TailwindCSS.",
        image: `${prefix}/images/projects/xivstrat.png`,
        tag: ["All", "Web"],
        gitUrl: "https://xivstrat.com",
        previewUrl: "https://xivstrat.com",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
        setCurrentPage(1);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Game"
                    isSelected={tag === "Game"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {currentProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded-md ${
                            currentPage === index + 1
                                ? "bg-gray-800 text-white"
                                : "bg-white text-black"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
