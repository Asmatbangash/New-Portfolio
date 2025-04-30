import React from 'react'
import { motion } from 'framer-motion'

// Component for skill category
function Skills({ title, skills, icon, delay }) {
    return (
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    )
  }

export default Skills