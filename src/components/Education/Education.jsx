import React from 'react'
import { motion } from 'framer-motion'

function EducationCard({ title, institution, period, description, delay }) {
    return (
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-teal-600 font-medium">{institution}</div>
        <div className="text-sm text-neutral-500 mb-3">{period}</div>
        <p className="text-neutral-600">{description}</p>
      </motion.div>
    )
  }
export default EducationCard