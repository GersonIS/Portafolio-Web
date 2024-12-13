"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    window.open(
      `https://wa.me/948765692?text=Nombre:%20${name}%0ACorreo:%20${email}%0AMensaje:%20${message}`
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500">
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-center mb-6">
          I&apos;m a Systems Engineer passionate about web development and
          cybersecurity. Feel free to reach out if you&apos;d like to
          collaborate or have any questions.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
            className="p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
            className="p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            autoComplete="off"
            className="p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-500 text-white py-3 px-6 rounded-lg hover:opacity-80 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 transition-colors duration-300"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 transition-colors duration-300"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 transition-colors duration-300"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
