import React from 'react'
import EducationCard from './Education'
import { motion } from 'framer-motion'

function EducationCatogry() {
  return (
    <section id="education" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2">Education & Certifications</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                My academic background and professional certifications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <EducationCard
                title="Bachelor of Science in Computer Science"
                institution="The university of Agriculture peshawar"
                period="2021 - 2025"
                description="Focused on software development, algorithms, and web technologies."
                delay={0}
              />
              <EducationCard
                title="FSC"
                institution="Hangu Institute Of Science & Technology"
                period="2019 - 2021"
                description="Focused on learning..."
                delay={0.2}
              />
              <EducationCard
                title="Full-Stack Web Development"
                institution="p92 software house"
                period="3-June-2024 - 13-Sep-2024"
                description="Intensive intership program covering modern web development technologies and practices."
                delay={0.4}
              />
              <EducationCard
                title="Mern Stack"
                institution="Techsol lab"
                period="1-Nov-2024 - 1-Dec-2024"
                description="Advanced Technology of JavaScript, Mern stack used for fast scalable website."
                delay={0.6}
              />
            </div>
          </div>
        </section>
  )
}

export default EducationCatogry