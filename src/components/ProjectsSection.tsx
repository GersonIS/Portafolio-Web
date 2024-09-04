"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    name: "Project One",
    description: "A web application built with React and Node.js.",
    image: "/proyecto.jpg", // Reemplaza con la ruta correcta
    liveLink: "#", // Reemplaza con el enlace del proyecto en vivo
    githubLink: "#", // Reemplaza con el enlace del repositorio en GitHub
  },
  {
    name: "Project Two",
    description: "A mobile app developed using React Native.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Three",
    description: "An e-commerce platform built with Next.js and Tailwind CSS.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Four",
    description: "A blog website using Flask and SQLAlchemy.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Five",
    description: "A portfolio website built with Gatsby and GraphQL.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Six",
    description: "A task management tool developed using Laravel.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Seven",
    description: "A social networking site using Django and React.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Eight",
    description:
      "A real-time chat application built with Socket.io and Node.js.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Nine",
    description: "A weather forecasting app using Vue.js and OpenWeather API.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Project Ten",
    description: "A data visualization dashboard built with D3.js.",
    image: "/proyecto.jpg",
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; delay: number }> = ({
  project,
  delay,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Se activa cuando el 20% del componente es visible
    triggerOnce: false, // Permite que la animación se repita
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <Image
        src={project.image}
        alt={project.name}
        className="rounded-t-lg mb-4 w-full h-48 object-cover"
        width={192}
        height={192}
      />
      <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-80 transition-opacity duration-300"
        >
          View Project
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-80 transition-opacity duration-300"
        >
          View Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
