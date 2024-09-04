"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSequelize,
  SiMysql,
  SiPrisma,
  SiClerk,
  SiTailwindcss,
  SiTypescript,
  SiFlask,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-500" /> },
  { name: "Sequelize", icon: <SiSequelize className="text-blue-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Prisma", icon: <SiPrisma className="text-teal-500" /> },
  { name: "Clerk", icon: <SiClerk className="text-indigo-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-200" /> },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
