"use client";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
    >
      <motion.div
        className="text-center md:text-left md:w-1/2 p-5"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 mt-12 lg:mt-0 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500">
          Hi! I&apos;m <br />
          <span>
            <Typewriter
              words={["Gerson", "Developer", "Pentester"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <motion.p
          className="text-lg mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I&apos;m a passionate software engineer with a strong interest in web
          development and cybersecurity. Let&apos;s build something great
          together!
        </motion.p>
        <motion.div
          className="flex justify-center md:justify-start mt-6 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/gerson-roberth-de-la-cruz-rodr%C3%ADguez-2539a1263/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-teal-400 hover:text-teal-300 transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/GersonIS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-teal-400 hover:text-teal-300 transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/gerson_rodriguez_tkd/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-teal-400 hover:text-teal-300 transition-colors duration-300" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-10 md:mt-0 md:w-1/2 p-5 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/perfil.jpg" // Reemplaza con la ruta de tu foto
          alt="Gerson"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 border-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500 p-1"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
