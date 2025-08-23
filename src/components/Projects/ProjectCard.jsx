import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react";

// Component for project card
function ProjectCard({ data }) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-neutral-600 mb-4">{data.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
            {data.tag}
          </span>
        </div>
        <div className="flex space-x-3">
          <a
            target="_blank"
            href={data.href}
            className="text-teal-600 hover:text-teal-700 flex items-center text-sm transition-colors"
          >
            Live Demo
            <ExternalLink size={14} className="ml-1" />
          </a>
          <a
            href={data.gitHub}
            className="text-teal-600 hover:text-teal-700 flex items-center text-sm transition-colors"
          >
            Source Code
            <GitHub size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
