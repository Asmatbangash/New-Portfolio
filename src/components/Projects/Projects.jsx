import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitlabIcon as GitHub} from 'lucide-react'

// Component for project card
function ProjectCard({ title, description, tags, image, delay }) {
    return (
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-neutral-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-teal-600 hover:text-teal-700 flex items-center text-sm transition-colors">
              Live Demo
              <ExternalLink size={14} className="ml-1" />
            </a>
            <a href="#" className="text-teal-600 hover:text-teal-700 flex items-center text-sm transition-colors">
              Source Code
              <GitHub size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

export default ProjectCard