import React from 'react'
import { motion } from 'framer-motion'

function TimelineItem({ title, company, period, description, delay }) {
    return (
      <motion.div
        className="relative flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div className="flex md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0 mt-1.5">
          <div className="md:text-right">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-teal-600 font-medium ">{company}</div>
            <div className="text-sm text-neutral-500">{period}</div>
          </div>
        </div>
        <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-teal-500 rounded-full transform md:-translate-x-1/2"></div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-neutral-600">{description}</p>
        </div>
      </motion.div>
    )
  }
export default TimelineItem