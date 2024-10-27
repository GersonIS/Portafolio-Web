"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    name: "Pasteleria",
    description:
      "Pagina para la realizacion de pedidos de una tienda de pasteleria y decoraciones",
    image: "/caramel.png",
    liveLink: "https://d-caramell.vercel.app/",
    githubLink: "https://github.com/GersonIS/DCaramell",
  },
  {
    name: "Servicios Generales",
    description: "Cotiza tus proyectos del hogar y centros en general",
    image: "/gildo.png",
    liveLink: "https://gildo.vercel.app/",
    githubLink: "https://github.com/GersonIS/Gildo-App",
  },
  {
    name: "Inventario",
    description: "Dashboard para llevar cuenta de existencias en almacen",
    image: "/project2.png",
    liveLink: "https://inventario-alpha.vercel.app/",
    githubLink: "https://github.com/GersonIS/Inventario",
  },
  {
    name: "Pokemon",
    description: "Elige tus pokemones favoritos",
    image: "/project3.png",
    liveLink: "https://pokemon-next-flame.vercel.app/",
    githubLink: "https://github.com/GersonIS/Pokemon-Next",
  },
  {
    name: "Ferreteria(AGREGAR CONEXION A BD)",
    description: "E-commerce para venta de productos de ferreteria",
    image: "/project4.png",
    liveLink: "https://anfabv.vercel.app/",
    githubLink: "https://github.com/GersonIS/TesisVenta",
  },
  // {
  //   name: "Muebleria",
  //   description: "Venta de muebles en general para el hogar",
  //   image: "/project6.png",
  //   liveLink: "https://muebleria-alpha.vercel.app/",
  //   githubLink: "https://github.com/GersonIS/muebleria",
  // },
  {
    name: "Ropa",
    description:
      "Elige la ropa que mejor de acomode a ti, hay para hombres, mujeres y niños",
    image: "/project7.png",
    liveLink: "https://regeja.vercel.app/",
    githubLink: "https://github.com/GersonIS/Ecommerce",
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
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.2, delay }} // Reducir la duración a 0.2s
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
