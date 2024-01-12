"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Dom Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/png.1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshal18z/REAL-DOM-PORTFOLIO",
    previewUrl: "https://github.com/harshal18z/REAL-DOM-PORTFOLIO",
  },
  {
    id: 2,
    title: "Fitness and sports",
    description: "Project 2 description",
    image: "/images/projects/fitness.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshal18z/FITNESS-AND-SPORT.SIH",
    previewUrl: "https://github.com/harshal18z/FITNESS-AND-SPORT.SIH",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Project 4 description",
    image: "/images/projects/Checklist.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/harshal18z/TO---DO-LIST-",
    previewUrl: "https://github.com/harshal18z/TO---DO-LIST-",
  },
  {
    id: 5,
    title: "Currency Converter",
    description: "Authentication and CRUD operations",
    image: "/images/projects/currency.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshal18z/currency-converter",
    previewUrl: "https://github.com/harshal18z/currency-converter",
  },
  {
    id: 6,
    title: "Bounce the balls ",
    description: "Project 5 description",
    image: "/images/projects/bounceball.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshal18z/BOUNCEBALLGAME",
    previewUrl: "https://bouncetheballs.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
          name="Mini Projects"
          isSelected={tag === "Mini Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
    </section>
  );
};

export default ProjectsSection;
